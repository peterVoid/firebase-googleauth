// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp0nGYbUgzIlBSc8wc3ruAez4ncgp9U_A",
  authDomain: "person-chat-c953a.firebaseapp.com",
  projectId: "person-chat-c953a",
  storageBucket: "person-chat-c953a.appspot.com",
  messagingSenderId: "496635289323",
  appId: "1:496635289323:web:7cc9710baa996b1c8ce8ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);