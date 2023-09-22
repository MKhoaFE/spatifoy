// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Wm2O9XaY_PYSSp6F5jrwBBInPz4WhPc",
  authDomain: "fir-project-cejs.firebaseapp.com",
  projectId: "fir-project-cejs",
  storageBucket: "fir-project-cejs.appspot.com",
  messagingSenderId: "382695299839",
  appId: "1:382695299839:web:c66db6d43c18a74468caca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()