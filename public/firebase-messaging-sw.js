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

// curl -X POST -H "Authorization: key=AIzaSyB9dJPbtyMtHpPKgZwoLzUjNFkxOWrsprg" -H "Content-Type: application/json" -d '{
//   "notification": {
//     "title": "New View",
//     "body": "5 to 1",
//     "icon": "firebase-logo.png",
//     "click_action": "https://console.firebase.google.com/project/portfolio-83749/database/data"
//   },
//   "to": "e1YmfJ_r1kE:APA91bFKYswOLK-EqknlkIioGtbYWK6mQUxjjXRVUh9XB0UKonqbAqC-7O4rmArou58e3w6X6UQAL2Lj3R038qqc2aud6ZaBcaE1vlhoKXZHHnh-rwgcWCAEGtGdWVCP8wqDQTjMztYx"
// }' "https://fcm.googleapis.com/fcm/send"
