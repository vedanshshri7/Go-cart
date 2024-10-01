// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8NQZpNAHVoDOz4xUAVNdEN4iDIhEpkkY",
  authDomain: "ordercart-fd79d.firebaseapp.com",
  projectId: "ordercart-fd79d",
  storageBucket: "ordercart-fd79d.appspot.com",
  messagingSenderId: "1016076945048",
  appId: "1:1016076945048:web:3eb1f4b75e0de754c272ed",
  measurementId: "G-QVRMS0ZX66"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {auth, app, firestore, storage};
// const analytics = getAnalytics(app);