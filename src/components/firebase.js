// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIK7-V6BCNo2EmcAOPxaFHBVL8iaoO_RQ",
  authDomain: "envo-safe-3fa62.firebaseapp.com",
  projectId: "envo-safe-3fa62",
  storageBucket: "envo-safe-3fa62.appspot.com",
  messagingSenderId: "432166831475",
  appId: "1:432166831475:web:aff2f5494f3b9604157106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);