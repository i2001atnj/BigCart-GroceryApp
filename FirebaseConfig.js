import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS-mh33YkRSKY_pp1gl5gsR-NE3p_0gpE",
  authDomain: "bigcart-groceryapp.firebaseapp.com",
  projectId: "bigcart-groceryapp",
  storageBucket: "bigcart-groceryapp.appspot.com",
  messagingSenderId: "312900824963",
  appId: "1:312900824963:web:f4eb5bc8195673457550b6",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
