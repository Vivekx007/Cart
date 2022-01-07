import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHqLNJ3RDeIYzUD-8HP1XX7NBsiAZBrZs",
  authDomain: "cart-f279d.firebaseapp.com",
  projectId: "cart-f279d",
  storageBucket: "cart-f279d.appspot.com",
  messagingSenderId: "430202124515",
  appId: "1:430202124515:web:df08359bd3c6b8e8492dd6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  
    <App />,
     document.getElementById('root')
);

