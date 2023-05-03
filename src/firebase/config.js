// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASIdSB5-XNH6e_AQ6Va6eBl9dtI33cRT4",
  authDomain: "react-619be.firebaseapp.com",
  projectId: "react-619be",
  storageBucket: "react-619be.appspot.com",
  messagingSenderId: "82541020116",
  appId: "1:82541020116:web:45078a4d51554ee22f0c41"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
