// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0xzeJhU8HO5KMS6KFBUmHK-sdwUNMIv4",
  authDomain: "tenis-app-c018d.firebaseapp.com",
  projectId: "tenis-app-c018d",
  storageBucket: "tenis-app-c018d.appspot.com",
  messagingSenderId: "324885522769",
  appId: "1:324885522769:web:75d020bda32a667b3a0b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)