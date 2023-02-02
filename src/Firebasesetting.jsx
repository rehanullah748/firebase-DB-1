// Import the functions you need from the SDKs you need
import { getFirestore} from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7OlrxFLnVuggiizG4iq1Ph8F8B8xtUKA",
  authDomain: "rehan-crud.firebaseapp.com",
  projectId: "rehan-crud",
  storageBucket: "rehan-crud.appspot.com",
  messagingSenderId: "878162373714",
  appId: "1:878162373714:web:62c58b7e42f09e4c4a438b",
  measurementId: "G-BJG9B3H0GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DataBase = getFirestore(app)
export default DataBase;