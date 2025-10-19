// Import the functions you need from the SDKs you need
// do not share this  info in public
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDZdexoE-BaHcqlClvkz3j5HOMKC8AIcw",
  authDomain: "auth-router-17b56.firebaseapp.com",
  projectId: "auth-router-17b56",
  storageBucket: "auth-router-17b56.firebasestorage.app",
  messagingSenderId: "1063343807245",
  appId: "1:1063343807245:web:cb30a688b7a169ce69ee44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
