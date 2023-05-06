// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQFVKnWhyZavpjQIbre72KiZRhMG6T7Dk",
  authDomain: "react-crud-01-8fa19.firebaseapp.com",
  projectId: "react-crud-01-8fa19",
  storageBucket: "react-crud-01-8fa19.appspot.com",
  messagingSenderId: "296082635774",
  appId: "1:296082635774:web:c9feb437114664189d1eaf",
  measurementId: "G-EXLZV46V27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
