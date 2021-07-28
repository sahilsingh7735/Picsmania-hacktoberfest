import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAtIFgL2n1GGaSjJCXpJ14pu2amMTd6hkM",
  authDomain: "picsmania-c099f.firebaseapp.com",
  projectId: "picsmania-c099f",
  storageBucket: "picsmania-c099f.appspot.com",
  messagingSenderId: "452053930738",
  appId: "1:452053930738:web:107acfa59d61bc4bd7b66b",
  measurementId: "G-79Y8S124GQ"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

