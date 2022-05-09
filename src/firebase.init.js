// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1-B2SXYrQ97D-KX_MyxuZQXsVw7FpFkc",
  authDomain: "go4fresh-7ca7a.firebaseapp.com",
  projectId: "go4fresh-7ca7a",
  storageBucket: "go4fresh-7ca7a.appspot.com",
  messagingSenderId: "586253174479",
  appId: "1:586253174479:web:79cad58360da27671999ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;