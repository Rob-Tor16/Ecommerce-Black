import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCWU1X7PpHY0VWywWwl7mUOXmAe1rQ5wRI",
  authDomain: "black-mdq.firebaseapp.com",
  projectId: "black-mdq",
  storageBucket: "black-mdq.appspot.com",
  messagingSenderId: "1073167913880",
  appId: "1:1073167913880:web:021c1f400b32591b2fd1ed",
  measurementId: "G-K2XQZB6HZG"
};


const firebaseApp = initializeApp(firebaseConfig);
 export const db = getFirestore(firebaseApp);
 export const addDoc = getFirestore(firebaseApp);

 