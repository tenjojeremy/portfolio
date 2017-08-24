import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './state/reducers';

// Firebase Configuration
var firebase = require("firebase/app");

var config = {
	apiKey: "AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY",
	authDomain: "portfolio-83749.firebaseapp.com",
	databaseURL: "https://portfolio-83749.firebaseio.com",
	projectId: "portfolio-83749",
	storageBucket: "portfolio-83749.appspot.com",
	messagingSenderId: "7666199790"
};
firebase.initializeApp(config);

ReactDOM.render(
	<App/>, document.getElementById('root'));
// registerServiceWorker();
