// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCsZ7llZrYO_23c4XAb8Le-tCHXsPjDsFk",
//   authDomain: "to-do-list-d148b.firebaseapp.com",
//   projectId: "to-do-list-d148b",
//   storageBucket: "to-do-list-d148b.appspot.com",
//   messagingSenderId: "317962535166",
//   appId: "1:317962535166:web:bb131abca95b495280e5af",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export default db;
export {app, auth}