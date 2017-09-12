
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
          '/',
          '/index.html',
          // '/static/js/main.f2ad7c56.js',
          // '/static/css/main.9826c792.css',
        ]
      );
    }).catch((err) => {console.log(err);})
  );
});
 
