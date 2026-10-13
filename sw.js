/*
  Olympus hub service worker.
  Purpose: make the hub installable and show a friendly page when offline.
  It never caches app code or data, so updates always arrive on the next load.
*/
const OFFLINE = '/offline.html';

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('olympus-offline-v1').then((c) => c.add(OFFLINE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.mode !== 'navigate') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith('/__/') || url.pathname.startsWith('/api/')) return;
  e.respondWith(fetch(req).catch(() => caches.match(OFFLINE)));
});
