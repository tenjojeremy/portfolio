
// importScripts('/node_modules/workbox-sw/build/workbox-sw.vX.X.X.prod.js');

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});

//Cache Shell
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(
        [
          'index.html',          
        ]
      );
    })
  );
});
