// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhAL1CWf4ZWJgbBzG9QOJIp0YHWXubcwY",
  authDomain: "inventory-management-5f28a.firebaseapp.com",
  projectId: "inventory-management-5f28a",
  storageBucket: "inventory-management-5f28a.appspot.com",
  messagingSenderId: "949272187351",
  appId: "1:949272187351:web:cc0af31225283532647b92",
  measurementId: "G-MGMXD5DJZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}