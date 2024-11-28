// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXdqdQILYjnPcbRclg8VNj0CAV-jqbSZk",
  authDomain: "smit-ecommerce-task.firebaseapp.com",
  projectId: "smit-ecommerce-task",
  storageBucket: "smit-ecommerce-task.firebasestorage.app",
  messagingSenderId: "350202543805",
  appId: "1:350202543805:web:7ae6e7e16a6ecbac56c1d4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut };
