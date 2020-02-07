import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./app";
import Reducers from "./state/reducers";
const store = createStore(Reducers);

//subscribe to GMC
if (navigator.serviceWorker) {
  navigator.serviceWorker.ready.then(sw => {
    sw.pushManager
      .subscribe({ userVisibleOnly: true })
      .then(function(subscription) {
        // console.log('endpoint:', subscription.endpoint);
      });
  });
}

// Firebase Configuration
const config = {
  apiKey: "AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY",
  authDomain: "portfolio-83749.firebaseapp.com",
  databaseURL: "https://portfolio-83749.firebaseio.com",
  projectId: "portfolio-83749",
  storageBucket: "portfolio-83749.appspot.com",
  messagingSenderId: "7666199790",
  appId: "1:7666199790:web:19f33a4fa0d7eb3fa397ff"
};
firebase.initializeApp(config);

//push notifications permission
const messaging = firebase.messaging();

messaging.onMessage(data => {
  // console.log(data);
});

//add visit
let current,
  d = new Date(),
  months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  currentDate = `${d.getHours()}:${d.getMinutes()} ${
    months[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;

firebase
  .database()
  .ref("visits")
  .once("value")
  .then(function(snap) {
    current = snap.val().count;
    let n = current + 1;

    // firebase.database().ref(`visits/`).update({count: n, date: currentDate, token: token})
    firebase
      .database()
      .ref(`visits/`)
      .update({ count: n, date: currentDate });
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
