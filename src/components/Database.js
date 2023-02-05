// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeOCIDsAuDDcy1o9zaak09wO4ZWyN_vpM",
  authDomain: "laser-c7594.firebaseapp.com",
  databaseURL: "https://laser-c7594-default-rtdb.firebaseio.com",
  projectId: "laser-c7594",
  storageBucket: "laser-c7594.appspot.com",
  messagingSenderId: "1098383648381",
  appId: "1:1098383648381:web:35e8ca897c0f02e4a1b314",
  measurementId: "G-3994H3J7M8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
// const database = firebase.database();

export const db = getDatabase();
export const auth = getAuth(app);
