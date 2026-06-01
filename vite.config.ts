import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

/**
 * Strips version suffixes from Figma Make-style imports.
 * e.g. "sonner@2.0.3" → "sonner", "@radix-ui/react-slot@1.1.2" → "@radix-ui/react-slot"
 */
function figmaVersionedImportResolver() {
  return {
    name: 'figma-versioned-import-resolver',
    enforce: 'pre' as const,
    async resolveId(id: string, importer: string | undefined, options: any) {
      // Match package@version or @scope/package@version (only bare specifiers)
      const match = id.match(/^((?:@[^/]+\/)?[^@/][^@]*)@\d+\.\d+\.\d+(.*)$/)
      if (match) {
        const cleaned = match[1] + (match[2] || '')
        // Delegate to Vite's normal resolution so node_modules is searched
        const resolved = await this.resolve(cleaned, importer, { ...options, skipSelf: true })
        return resolved || cleaned
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaVersionedImportResolver(),
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
