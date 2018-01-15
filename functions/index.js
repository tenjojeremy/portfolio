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
      original
    }
  }
  return admin.messaging().sendToDevice("c_cjtWvFU-M:APA91bHGQnJDZRT7jwUdhlWn2p1uj8MouncSDH9fl1W9lI0F-n-kSz3hhdEaVXEABhigDxrKkbXZeotw4bWbZ6mwKoO5ypoDPXxxy3ANrF7q3BY0bGSM8nRSlKno4GDFAYYaN5MtHorS", payload);

});
