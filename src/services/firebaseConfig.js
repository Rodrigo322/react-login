import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXnNl4ZMotIZOkJuzTGbyaZg5EC5jsdQE",
  authDomain: "react-auth-b8f8a.firebaseapp.com",
  projectId: "react-auth-b8f8a",
  storageBucket: "react-auth-b8f8a.appspot.com",
  messagingSenderId: "337870583399",
  appId: "1:337870583399:web:2a1851656f08b92e9b86c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
