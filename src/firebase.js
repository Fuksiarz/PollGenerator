// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf4giOjtlhGDRIwxSOrnznt3-VhxZMoPY",
    authDomain: "project-c3d2a.firebaseapp.com",
    projectId: "project-c3d2a",
    storageBucket: "project-c3d2a.appspot.com",
    messagingSenderId: "269167754109",
    appId: "1:269167754109:web:561221dbd08e56ef9f6a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app);