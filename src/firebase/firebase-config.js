// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsHxzHkze9ZmaHShSCLkLjU3N0GFTimyg",
  authDomain: "react-app-cursos-d348c.firebaseapp.com",
  projectId: "react-app-cursos-d348c",
  storageBucket: "react-app-cursos-d348c.appspot.com",
  messagingSenderId: "314674887885",
  appId: "1:314674887885:web:fb79e8ad40c63b66c3fd84"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider, 
    firebase
}