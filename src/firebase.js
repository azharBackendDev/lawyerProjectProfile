// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPLXPjbqQJijfE4LKGp-RVXfiDc84b2gQ",
  authDomain: "basiclogin-c51a9.firebaseapp.com",
  projectId: "basiclogin-c51a9",
  storageBucket: "basiclogin-c51a9.appspot.com",
  messagingSenderId: "248511782868",
  appId: "1:248511782868:web:aca7ba85f214a73c2a4041",
  measurementId: "G-NMCP9JGV4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;  