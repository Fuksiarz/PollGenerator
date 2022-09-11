// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFikmgcL5B8ebZbU_oml9ZzRpd0K3gPIg",
    authDomain: "pollgenerator-22d2c.firebaseapp.com",
    projectId: "pollgenerator-22d2c",
    storageBucket: "pollgenerator-22d2c.appspot.com",
    messagingSenderId: "1095085510930",
    appId: "1:1095085510930:web:dc10fa28b4b53ba86e23cb"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app);