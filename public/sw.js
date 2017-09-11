self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (let windowClient of windowClients) {
      windowClient.navigate(windowClient.url);
    }
  });
});

//firebase MFC
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

let config = {
  apiKey: "AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY",
  authDomain: "portfolio-83749.firebaseapp.com",
  databaseURL: "https://portfolio-83749.firebaseio.com",
  projectId: "portfolio-83749",
  storageBucket: "portfolio-83749.appspot.com",
  messagingSenderId: "7666199790"
}
firebase.initializeApp(config);

//instead of Push API
const messaging = firebase.messaging();
// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.

messaging.setBackgroundMessageHandler(({data} = {}) => {
  const title = data.title || 'Title';
  const opts = Object.assign({
    body: data.body || 'Body'
  }, data);

  return self.registration.showNotification(title, opts);
});
// curl "https://android.googleapis.com/gcm/send/d3i3kUH1toE:APA91bGmZqb-YiFWZ8YxGi5UIW99aXWUrFVUlRZypYokKS0cqByxs0MX-Xnns5UlVfOk1ZOImWfbxJyFGk-mwBzwIX23_T4wYPqH8xP7uv8EgXRNLYNmzMlCK6XaRRnTG3ggG7XRUTuO" --request POST --header "TTL: 60" --header "Content-Length: 0" \
// --header "Authorization: key=AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY"
