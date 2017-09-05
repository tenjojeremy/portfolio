import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './state/reducers';
import firebase from 'firebase/app';
require("firebase/database");

const store = createStore(Reducers);

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
registerServiceWorker();
