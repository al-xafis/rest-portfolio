import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZ2P4yUXsutVa1KkaFpxcuY_t5yWe9zKY",
  authDomain: "rest-portfolio.firebaseapp.com",
  projectId: "rest-portfolio",
  storageBucket: "rest-portfolio.appspot.com",
  messagingSenderId: "87542432803",
  appId: "1:87542432803:web:46c982d2aa0931db2d1d96",
  measurementId: "G-KJ3KT5KNKV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };