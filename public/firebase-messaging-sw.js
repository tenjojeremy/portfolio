importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

firebase.initializeApp(firebaseConfig);

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

// curl -X POST -H "Authorization: key=AIzaSyB9dJPbtyMtHpPKgZwoLzUjNFkxOWrsprg" -H "Content-Type: application/json" -d '{
//   "notification": {
//     "title": "Portugal vs. Denmark",
//     "body": "5 to 1",
//     "icon": "firebase-logo.png",
//     "click_action": "http://localhost:8081"
//   },
//   "to": "DEVICE_REGISTRATION_TOKEN"
// }' "https://android.googleapis.com/gcm/send/d3i3kUH1toE:APA91bGmZqb-YiFWZ8YxGi5UIW99aXWUrFVUlRZypYokKS0cqByxs0MX-Xnns5UlVfOk1ZOImWfbxJyFGk-mwBzwIX23_T4wYPqH8xP7uv8EgXRNLYNmzMlCK6XaRRnTG3ggG7XRUTuO"
