importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

var config = {
  apiKey: "AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY",
  authDomain: "portfolio-83749.firebaseapp.com",
  databaseURL: "https://portfolio-83749.firebaseio.com",
  projectId: "portfolio-83749",
  storageBucket: "portfolio-83749.appspot.com",
  messagingSenderId: "7666199790"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

// messaging.getToken().then((token) => {
//   console.log(token);
// })

messaging.setBackgroundMessageHandler(({data} = {}) => {
  const title = data.title || 'Title';
  const opts = Object.assign({
    body: data.body || 'Body'
  }, data);

  return self.registration.showNotification(title, opts);
});

// curl - X POST - H "Authorization: key=AIzaSyB9dJPbtyMtHpPKgZwoLzUjNFkxOWrsprg" - H "Content-Type: application/json" - d '{
//  "notification" : {
//   "title": "Portugal vs. Denmark",
//   "body": "5 to 1",
//   "icon": "firebase-logo.png",
//   "click_action": "http://localhost:8081"
// },
// "to" : "DEVICE_REGISTRATION_TOKEN"
// }
// ' "https://android.googleapis.com/gcm/send/d3i3kUH1toE:APA91bGmZqb-YiFWZ8YxGi5UIW99aXWUrFVUlRZypYokKS0cqByxs0MX-Xnns5UlVfOk1ZOImWfbxJyFGk-mwBzwIX23_T4wYPqH8xP7uv8EgXRNLYNmzMlCK6XaRRnTG3ggG7XRUTuO"
