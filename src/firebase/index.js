// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! database importu
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJXI9LQFKb8ysvudVv02E4B5if1Zc6uec",
  authDomain: "chat-f40ea.firebaseapp.com",
  projectId: "chat-f40ea",
  storageBucket: "chat-f40ea.firebasestorage.app",
  messagingSenderId: "1010723316774",
  appId: "1:1010723316774:web:c8b13245c367362e5732e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication hixmetini referansınjı alma
export const auth = getAuth(app);
// google saglayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//! firestore veri tabanının kurulumu
export const db = getFirestore(app);
