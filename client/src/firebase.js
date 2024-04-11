// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.VITE_FIREBASE_API_KEY,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "legend-mern-blog.firebaseapp.com",
  projectId: "legend-mern-blog",
  storageBucket: "legend-mern-blog.appspot.com",
  messagingSenderId: "199661461382",
  appId: "1:199661461382:web:845dac437b9440451f1607"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);