import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMl-pVKze91ga09u9lIGmWrUm9-PJYN6g",
    authDomain: "instagram-clone-react-f196e.firebaseapp.com",
    projectId: "instagram-clone-react-f196e",
    storageBucket: "instagram-clone-react-f196e.appspot.com",
    messagingSenderId: "675741048996",
    appId: "1:675741048996:web:d890446ebde1b62b1bc631",
    measurementId: "G-Z4XTY9R9E6"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

