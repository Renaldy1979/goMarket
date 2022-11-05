// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU2rgnNOQ1n0xIiRmzI-Zuozad1EkujGk",
  authDomain: "gomarket-364017.firebaseapp.com",
  projectId: "gomarket-364017",
  storageBucket: "gomarket-364017.appspot.com",
  messagingSenderId: "253538935528",
  appId: "1:253538935528:web:311226a5c1ca2c3e6f5f5d",
  measurementId: "G-S1M8PR1ZML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
