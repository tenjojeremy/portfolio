import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './app'
import Reducers from './state/reducers'
const store = createStore(Reducers)

const config = {
  apiKey: 'AIzaSyDRRWbzzADN3rhjBWpZeiHfaIq4a1gvIOY',
  authDomain: 'portfolio-83749.firebaseapp.com',
  databaseURL: 'https://portfolio-83749.firebaseio.com',
  projectId: 'portfolio-83749',
  storageBucket: 'portfolio-83749.appspot.com',
  messagingSenderId: '7666199790',
  appId: '1:7666199790:web:19f33a4fa0d7eb3fa397ff'
}
firebase.initializeApp(config)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
