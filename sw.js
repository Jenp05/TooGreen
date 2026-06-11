/* Service worker auto-destruction — vide le cache et se supprime */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', async () => {
  const keys = await caches.keys();
  await Promise.all(keys.map(k => caches.delete(k)));
  self.clients.claim();
});
