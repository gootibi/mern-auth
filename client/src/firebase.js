// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c6d24.firebaseapp.com",
  projectId: "mern-auth-c6d24",
  storageBucket: "mern-auth-c6d24.appspot.com",
  messagingSenderId: "185456149722",
  appId: "1:185456149722:web:a154417579e13fa230d1e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);