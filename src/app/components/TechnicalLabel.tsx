import React from 'react';

interface TechnicalLabelProps {
  sectionId: string;
  status?: boolean;
  className?: string;
}

export function TechnicalLabel({ sectionId, status = true, className = "" }: TechnicalLabelProps) {
  return (
    <div className={`technical-label ${className}`}>
      <span className="text-accent-primary" style={{ fontSize: '6px' }}>●</span>
      <span className="font-body text-[10px] font-medium tracking-[0.25em] text-text-muted uppercase">FlowDeesign</span>
    </div>
  );
}