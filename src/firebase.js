// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjH2nH_k2mRtsnSN3QE-9dugechtCkx7o",
    authDomain: "projekt-react-238ea.firebaseapp.com",
    projectId: "projekt-react-238ea",
    storageBucket: "projekt-react-238ea.appspot.com",
    messagingSenderId: "30493456725",
    appId: "1:30493456725:web:9432ddda7aa4b3f2fad7dc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore =getFirestore(app);