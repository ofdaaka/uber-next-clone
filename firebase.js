
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAwqrDVLQc4s_3guxhquhE_ZWZcG5EfTJw",
  authDomain: "uber-next-clone-live-274ea.firebaseapp.com",
  projectId: "uber-next-clone-live-274ea",
  storageBucket: "uber-next-clone-live-274ea.appspot.com",
  messagingSenderId: "89631181690",
  appId: "1:89631181690:web:faadc3bd2d11ee6074e4c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }