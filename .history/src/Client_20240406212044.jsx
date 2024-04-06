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

const firebaseConfig = {
  apiKey: process.enenv.VITE_REACT_APP_API_KEY,
  authDomain: process.enenv.VITE_REACT_APP_AUTH_DOMAIN,
  databaseURL: process.enenv.VITE_REACT_APP_DATABASE_URL,
  projectId: process.enenv.VITE_REACT_APP_PROJECT_ID,
  storageBucket: process.enenv.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.enenv.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: process.enenv.VITE_REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export default db;
export {app, auth}