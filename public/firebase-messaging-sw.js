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
