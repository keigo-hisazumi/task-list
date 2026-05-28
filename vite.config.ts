import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { writeFileSync } from 'fs'
import { join } from 'path'

const base = process.env.VITE_BASE_PATH ?? '/task-list/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      // Rewrite manifest.json with the correct start_url/scope for each deployment
      // (PR previews use a different base path than the production app)
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
            { src: `${base}pwa-icon-192x192.png`, sizes: '192x192', type: 'image/png' },
            { src: `${base}pwa-icon-512x512.png`, sizes: '512x512', type: 'image/png' },
          ],
        }
        writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
      },
    },
  ],
  base,
})
