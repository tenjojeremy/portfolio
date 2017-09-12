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

curl -X POST -H "Authorization: key=AIzaSyB9dJPbtyMtHpPKgZwoLzUjNFkxOWrsprg" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "https://console.firebase.google.com/project/portfolio-83749/database/data"
  },
  "to": "c1Brr8gSo9w:APA91bFRyvRQgO-LxiE7NpxBMVRfos3PHqNFDy2Ms0P5ieInTwkl10GHasHVQ2oECGRTPLzm4QPFQGpshb0x0VKyngNljsM2hlHHcmXHSi6TvCX3EibhqsHTPGjSotvuvm0hmGxQv3IW"
}' "https://fcm.googleapis.com/fcm/send"
