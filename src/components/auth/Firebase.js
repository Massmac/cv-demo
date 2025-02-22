// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6UFB5ksKdst7LjI3woaAuLERyD6JzOOE",
  authDomain: "cv-demo-b5d50.firebaseapp.com",
  projectId: "cv-demo-b5d50",
  storageBucket: "cv-demo-b5d50.firebasestorage.app",
  messagingSenderId: "1048434805362",
  appId: "1:1048434805362:web:c00b5ccb8dabaf6f3150eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export default app;