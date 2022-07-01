// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvtKnQNBxo9GAU9HEukGv21MawSr7lEkg",
    authDomain: "projekt-82127.firebaseapp.com",
    projectId: "projekt-82127",
    storageBucket: "projekt-82127.appspot.com",
    messagingSenderId: "920013657016",
    appId: "1:920013657016:web:71af4914ad37830dbb354d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app);