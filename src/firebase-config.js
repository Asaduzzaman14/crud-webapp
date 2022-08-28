// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxJEZkpxpuG_uEe6Yzmb_DtDmZ7SvB3JQ",
    authDomain: "crud-web-app-be83b.firebaseapp.com",
    projectId: "crud-web-app-be83b",
    storageBucket: "crud-web-app-be83b.appspot.com",
    messagingSenderId: "185368368496",
    appId: "1:185368368496:web:ec2595ed06945791a5ebb5",
    measurementId: "G-00FGLTM6MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
