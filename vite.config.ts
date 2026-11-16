import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { writeFileSync } from 'fs'
import { join } from 'path'

const base = process.env.VITE_BASE_PATH ?? '/task-list/'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-manifest',
      apply: 'build',
      writeBundle(options) {
        const outDir = options.dir ?? 'dist'
        const manifest = {
          name: 'Todoリスト',
          short_name: 'Todo',
          description: 'シンプルなタスク管理アプリ',
          start_url: base,
          scope: base,
          display: 'standalone',
          background_color: '#4f46e5',
          theme_color: '#4f46e5',
          icons: [
            { src: `${base}pwa-64x64.png`, sizes: '64x64', type: 'image/png' },
            { src: `${base}pwa-192x192.png`, sizes: '192x192', type: 'image/png' },
            { src: `${base}pwa-512x512.png`, sizes: '512x512', type: 'image/png' },
            { src: `${base}maskable-icon-512x512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
          ],
        }
        writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base,
})
