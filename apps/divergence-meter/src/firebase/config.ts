// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiH2WQFPIrwj6osq-_2kG2gtDiO3Z6tLQ",
  authDomain: "steins-gate-initiative.firebaseapp.com",
  projectId: "steins-gate-initiative",
  storageBucket: "steins-gate-initiative.firebasestorage.app",
  messagingSenderId: "869532890550",
  appId: "1:869532890550:web:d25f43b6d9be161fb4fd17",
  measurementId: "G-PLYZHPCEKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);