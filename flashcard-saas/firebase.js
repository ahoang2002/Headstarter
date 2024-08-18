// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7TChJLuEb5YaHCMwQI7r_RL3TqLfQBiM",
  authDomain: "flashcard-saas-f8689.firebaseapp.com",
  projectId: "flashcard-saas-f8689",
  storageBucket: "flashcard-saas-f8689.appspot.com",
  messagingSenderId: "30964009639",
  appId: "1:30964009639:web:96d66f397cfd27fd052982",
  measurementId: "G-YD6LNHX0PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}