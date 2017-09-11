import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './state/reducers';
import firebase from 'firebase';
require("firebase/database");

const store = createStore(Reducers);

//service Worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.onload = () => {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).catch(error => {
      console.error('Error during service worker registration:', error);
    });
    // const swUrl2 = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;
    // navigator.serviceWorker.register(swUrl2).catch(error => {
    //   console.error('Error during service worker registration:', error);
    // });
  }
}

//push notifications permission
// Notification.requestPermission()

//subscribe to GMC
navigator.serviceWorker.ready.then((sw) => {
  sw.pushManager.subscribe({userVisibleOnly: true}).then(function(subscription) {
    console.log('endpoint:', subscription.endpoint);
  })
})

// Firebase Configuration
var config = {
  apiKey: "AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY",
  authDomain: "portfolio-83749.firebaseapp.com",
  databaseURL: "https://portfolio-83749.firebaseio.com",
  projectId: "portfolio-83749",
  storageBucket: "portfolio-83749.appspot.com",
  messagingSenderId: "7666199790"
};
firebase.initializeApp(config);


//add visit
let current,
  d = new Date(),
  months = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  currentDate = '' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()

firebase.database().ref('visits').once('value').then(function(snap) {
  current = snap.val().count
  let n = current + 1
  firebase.database().ref(`visits/`).update({count: n, date: currentDate})
})

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
