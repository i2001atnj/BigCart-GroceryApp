// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBb_r287THlVw-HzCy8ylJe_Yaku7FKsPg",
  authDomain: "bigcart-app.firebaseapp.com",
  projectId: "bigcart-app",
  storageBucket: "bigcart-app.appspot.com",
  messagingSenderId: "56295170874",
  appId: "1:56295170874:web:38b32323e4ce3e2bb5e603",
  measurementId: "G-SLE1MQSNZ3"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);