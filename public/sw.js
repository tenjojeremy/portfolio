
// importScripts('/node_modules/workbox-sw/build/workbox-sw.vX.X.X.prod.js');

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});

//Cache Assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cacheName').then(function(cache) {
      return cache.addAll(
        [
          'static/css/*.css',
          'static/js/*.js',
        ]
      );
    })
  );
});
