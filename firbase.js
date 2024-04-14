// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvag_Z_1bDJ6Sy6XWg0EH4hcoBCzLtl6Y",
  authDomain: "gympro-47109.firebaseapp.com",
  projectId: "gympro-47109",
  storageBucket: "gympro-47109.appspot.com",
  messagingSenderId: "500981311402",
  appId: "1:500981311402:web:6a3496d2883ca9710f6dd3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
