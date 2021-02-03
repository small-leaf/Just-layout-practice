import dotenv from "dotenv";
import firebase from "firebase";
dotenv.config();
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAj6QIw089ZtNBEbrUJ9bWIe2AfXeADufU",
  authDomain: "clone-59559.firebaseapp.com",
  projectId: "clone-59559",
  storageBucket: "clone-59559.appspot.com",
  messagingSenderId: "1086989918017",
  appId: "1:1086989918017:web:6e0435ff18384a1aa14bc0",
  measurementId: "G-RFTPKGPD6M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
