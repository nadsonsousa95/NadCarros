// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8G2iTiM2qXsjCb3y0JEbjR88zgVswZow",
  authDomain: "nadcarros.firebaseapp.com",
  projectId: "nadcarros",
  storageBucket: "nadcarros.firebasestorage.app",
  messagingSenderId: "743801087837",
  appId: "1:743801087837:web:c34d38aa606ee64a7a6ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)

export {db, auth, storage}