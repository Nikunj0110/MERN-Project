// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-project-30d33.firebaseapp.com",
  projectId: "mern-project-30d33",
  storageBucket: "mern-project-30d33.firebasestorage.app",
  messagingSenderId: "367144963623",
  appId: "1:367144963623:web:51819e368c5616b69ac802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}