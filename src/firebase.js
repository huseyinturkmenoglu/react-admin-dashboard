import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-admindashboard-demo.firebaseapp.com",
  projectId: "react-admindashboard-demo",
  storageBucket: "react-admindashboard-demo.appspot.com",
  messagingSenderId: "956567983196",
  appId: "1:956567983196:web:4d617a183b0d9736a48299",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
