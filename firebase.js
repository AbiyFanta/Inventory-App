// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkA5VaLKmXEv9-CelTABlP68v7ECCwlFQ",
  authDomain: "inventory-app-13aed.firebaseapp.com",
  projectId: "inventory-app-13aed",
  storageBucket: "inventory-app-13aed.appspot.com",
  messagingSenderId: "12791635505",
  appId: "1:12791635505:web:394797e7eca1103518bf10",
  measurementId: "G-5B75YGLY1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};