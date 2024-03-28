// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfXbxO0KdaPYZ0Tvr39IUrtHRqIWm9T5w",
  authDomain: "ingreso-de-creditos.firebaseapp.com",
  projectId: "ingreso-de-creditos",
  storageBucket: "ingreso-de-creditos.appspot.com",
  messagingSenderId: "669693439234",
  appId: "1:669693439234:web:ed115525bcd00d8822a61b",
  measurementId: "G-B3LFWM1M4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);