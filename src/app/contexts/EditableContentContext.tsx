import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface EditableContentState {
  [key: string]: string;
}

interface EditableContentContextValue {
  isEditMode: boolean;
  toggleEditMode: () => void;
  getContent: (key: string, defaultValue: string) => string;
  setContent: (key: string, value: string) => void;
  resetContent: (key: string) => void;
  resetAll: () => void;
  hasOverride: (key: string) => boolean;
}

const STORAGE_KEY = 'flowdee-editable-content';

function loadFromStorage(): EditableContentState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveToStorage(state: EditableContentState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage full or unavailable — silent fail
  }
}

const EditableContentContext = createContext<EditableContentContextValue | null>(null);

export function EditableContentProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContentState] = useState<EditableContentState>(() => loadFromStorage());

  // Persist to localStorage on every change
  useEffect(() => {
    saveToStorage(content);
  }, [content]);

  const toggleEditMode = useCallback(() => {
    setIsEditMode(prev => !prev);
  }, []);

  const getContent = useCallback((key: string, defaultValue: string): string => {
    return content[key] !== undefined ? content[key] : defaultValue;
  }, [content]);

  const setContent = useCallback((key: string, value: string) => {
    setContentState(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetContent = useCallback((key: string) => {
    setContentState(prev => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setContentState({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const hasOverride = useCallback((key: string): boolean => {
    return content[key] !== undefined;
  }, [content]);

  return (
    <EditableContentContext.Provider
      value={{
        isEditMode,
        toggleEditMode,
        getContent,
        setContent,
        resetContent,
        resetAll,
        hasOverride,
      }}
    >
      {children}
    </EditableContentContext.Provider>
  );
}

export function useEditableContent() {
  const ctx = useContext(EditableContentContext);
  if (!ctx) {
    throw new Error('useEditableContent must be used within an EditableContentProvider');
  }
  return ctx;
}
