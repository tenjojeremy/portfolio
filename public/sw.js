
// importScripts('/node_modules/workbox-sw/build/workbox-sw.vX.X.X.prod.js');

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});

//Cache Shell - Cache falling back to the network strategy
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(
        [
          '/index.html',
        ]
      );
    }).catch((err) => {console.log(err);})
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
