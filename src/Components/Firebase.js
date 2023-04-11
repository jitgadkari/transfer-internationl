// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEwr4dgj9h_-cJVgjLdZhLB0PkUff7oOo",
  authDomain: "transfer-international.firebaseapp.com",
  projectId: "transfer-international",
  storageBucket: "transfer-international.appspot.com",
  messagingSenderId: "856765510260",
  appId: "1:856765510260:web:98d7b159f61b776dbe5721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth();

export { app, auth};