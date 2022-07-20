const cacheName = 'me-salva'
const filesToCache = []

self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)))
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)))
})

self.addEventListener('sync', event => {
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)))
})
