const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendView = functions.database.ref('/visits/count').onUpdate(event => {
  const original = event.data.val()

  let payload = {
    notification: {
      title: 'JT Showcase',
      body: 'Portfolio Viewed!',
      sound: 'default'
    }
  }
  return admin.messaging().sendToDevice("e1YmfJ_r1kE:APA91bFKYswOLK-EqknlkIioGtbYWK6mQUxjjXRVUh9XB0UKonqbAqC-7O4rmArou58e3w6X6UQAL2Lj3R038qqc2aud6ZaBcaE1vlhoKXZHHnh-rwgcWCAEGtGdWVCP8wqDQTjMztYx", payload);

});
