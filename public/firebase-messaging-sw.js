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
//     "title": "Portugal vs. Denmark",
//     "body": "5 to 1",
//     "icon": "firebase-logo.png",
//     "click_action": "http://localhost:8081"
//   },
//   "to": "cgmm9_2cP-Y:APA91bHa-7M_Md3fR0_11WGIgNEyP4xqeK480Pw294RpbZwy4quiW5IW8yKeR1mDe-kyyJkCzXRzpY5iNvMyohypPmiMCHz58djKHgNYbsHD1AjfadtT5MXLBQU2mnfwtehPDZH780JO"
// }' "https://fcm.googleapis.com/fcm/send"
