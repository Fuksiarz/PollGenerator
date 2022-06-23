// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAqeSvmoi-cuFZCMrqq7txCScMmb06gH1A",
    authDomain: "testingnext-5da95.firebaseapp.com",
    projectId: "testingnext-5da95",
    storageBucket: "testingnext-5da95.appspot.com",
    messagingSenderId: "883248769899",
    appId: "1:883248769899:web:83125db77519cd9b1a3a2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app);