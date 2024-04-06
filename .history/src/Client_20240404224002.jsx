// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSXqi9ROzpe_FAaHlU2YTLKgUQAuKgrWk",
  authDomain: "shopping-bb1fc.firebaseapp.com",
  projectId: "shopping-bb1fc",
  storageBucket: "shopping-bb1fc.appspot.com",
  messagingSenderId: "731158622024",
  appId: "1:731158622024:web:b3d93113c0e79114814d7d",
  measurementId: "G-TL5MB836E4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth
