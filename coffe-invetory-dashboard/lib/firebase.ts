// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtcG-sFAqQM6TiNOuGy5bWIVEpwDZIxV0",
  authDomain: "coffee-shop-storage.firebaseapp.com",
  projectId: "coffee-shop-storage",
  storageBucket: "coffee-shop-storage.firebasestorage.app",
  messagingSenderId: "583475012432",
  appId: "1:583475012432:web:395520d0a2b861dc164255",
  measurementId: "G-RBZF7CH985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };