
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_uo8Ve5hfk2fzoETPkNCGvVd73xl_FY4",
  authDomain: "auth-moha-milon-48ce3.firebaseapp.com",
  projectId: "auth-moha-milon-48ce3",
  storageBucket: "auth-moha-milon-48ce3.appspot.com",
  messagingSenderId: "1056972777771",
  appId: "1:1056972777771:web:3eadf35dac5abd6e983d6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;