const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendView = functions.database.ref('/visits/count').onUpdate(event => {
  let payload = {
    notification: {
      title: 'Firebase Notification',
      body: 'New View',
      sound: 'default'
    }
  }
  return admin.messaging().sendToDevice("e1YmfJ_r1kE:APA91bFKYswOLK-EqknlkIioGtbYWK6mQUxjjXRVUh9XB0UKonqbAqC-7O4rmArou58e3w6X6UQAL2Lj3R038qqc2aud6ZaBcaE1vlhoKXZHHnh-rwgcWCAEGtGdWVCP8wqDQTjMztYx", payload);

});
