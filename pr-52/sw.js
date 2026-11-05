// iOS の PWA ではページ側で設定したバッジがバックグラウンド移行後に消えることがあるため、
// Service Worker からもバッジを設定して維持させる
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('message', (event) => {
  const data = event.data
  if (!data || data.type !== 'SET_BADGE') return
  const nav = self.navigator
  if (!('setAppBadge' in nav)) return
  const count = Number(data.count) || 0
  event.waitUntil(
    (count > 0 ? nav.setAppBadge(count) : nav.clearAppBadge()).catch(() => {})
  )
})
