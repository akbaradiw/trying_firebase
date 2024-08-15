// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIj-kPV0SH7btCipR3yUy3pv4NGlIkAHQ",
  authDomain: "react-auth-f171e.firebaseapp.com",
  projectId: "react-auth-f171e",
  storageBucket: "react-auth-f171e.appspot.com",
  messagingSenderId: "237062225465",
  appId: "1:237062225465:web:44f2bf3cc4b44f04b9d7e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
