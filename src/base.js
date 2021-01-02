import Rebase from 're-base';
//import firebase from 'firebase';
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCPUfi6SbUKo4wOtq1b_NceFz80CIZ8mWY",
    authDomain: "catch-of-the-day-lgrayson.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lgrayson-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;