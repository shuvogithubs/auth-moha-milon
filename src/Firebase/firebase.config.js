// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFjgDnYdCzi0WU6sbQ7VDfklLyQJJ2Aq8",
  authDomain: "user-email-password-auth-2b9ba.firebaseapp.com",
  projectId: "user-email-password-auth-2b9ba",
  storageBucket: "user-email-password-auth-2b9ba.appspot.com",
  messagingSenderId: "853958934754",
  appId: "1:853958934754:web:4f7f1a95f099aed17e9ebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;