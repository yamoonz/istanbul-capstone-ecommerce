import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCh4oNUuWlrY8QZMGwZ4zOivJYwSi_ezbE",
  authDomain: "testcapstone-project.firebaseapp.com",
  databaseURL: "https://testcapstone-project.firebaseio.com",
  projectId: "testcapstone-project",
  storageBucket: "testcapstone-project.appspot.com",
  messagingSenderId: "866376480749",
  appId: "1:866376480749:web:24063b63ba331fb83a19e4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();
export default db;
