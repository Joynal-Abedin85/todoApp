// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX45sNoJRsNBkQV53jVzM2siL4Wbm5O0Y",
  authDomain: "todo-app-5cdda.firebaseapp.com",
  projectId: "todo-app-5cdda",
  storageBucket: "todo-app-5cdda.firebasestorage.app",
  messagingSenderId: "865565145807",
  appId: "1:865565145807:web:8dd5c1715c85504d1fd5ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Functions for Login & Logout
const login = async () => {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Login Error:", error);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout Error:", error);
    }
};

export { auth, login, logout };