self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});

//push notifications
// self.addEventListener('push', function(event) {
//   console.log('Received a push message', event);
//
//   var title = 'Yay a message.';
//   var body = 'We have received a push message.';
//   var icon = '/images/icon-192x192.png';
//   var tag = 'simple-push-demo-notification-tag';
//
//   event.waitUntil(self.registration.showNotification(title, {
//     body: body,
//     icon: icon,
//     tag: tag
//   }));
// });

importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

let config = {
  apiKey: "AIzaSyAyWo-iY3ZVOznoX3p1pcqGZsQVNdO9rjI",
  authDomain: "prototypelive-4af9e.firebaseapp.com",
  databaseURL: "https://prototypelive-4af9e.firebaseio.com",
  projectId: "prototypelive-4af9e",
  storageBucket: "prototypelive-4af9e.appspot.com",
  messagingSenderId: "430492115959"
}
firebase.initializeApp(config);

const messaging = firebase.messaging();

// using message api of firebase instead of push event handler
// when we got a message in raw formatn without body message in notification
// [Receive Messages in a JavaScript Client](https://goo.gl/B6qqOu)
messaging.setBackgroundMessageHandler(({data} = {}) => {
  const title = data.title || 'Title';
  const opts = Object.assign({
    body: data.body || 'Body'
  }, data);

  return self.registration.showNotification(title, opts);
});
