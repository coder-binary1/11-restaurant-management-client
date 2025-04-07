// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY1wAjoJzCWSsFAIDoWbEVsAll9P7rYkk",
  authDomain: "restaurant-management-ac40f.firebaseapp.com",
  projectId: "restaurant-management-ac40f",
  storageBucket: "restaurant-management-ac40f.firebasestorage.app",
  messagingSenderId: "1066594221611",
  appId: "1:1066594221611:web:dbd7a6900bb0dbd853f46e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
