// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Getting our data from the databases
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAXGulCBS-edgbYlR5lz4YPRxp2SMtg22k",
  authDomain: "portfolio-e7608.firebaseapp.com",
  projectId: "portfolio-e7608",
  storageBucket: "portfolio-e7608.appspot.com",
  messagingSenderId: "542962241383",
  appId: "1:542962241383:web:7f43df63c6066bf861e9c2",
  measurementId: "G-2CTW5SJWXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);