import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIs3gfwdJNEWcHFpXfgaLNYI3HYCeMdeI",
    authDomain: "pitalk-49e7c.firebaseapp.com",
    projectId: "pitalk-49e7c",
    storageBucket: "pitalk-49e7c.appspot.com",
    messagingSenderId: "672371713357",
    appId: "1:672371713357:web:37dab88584dca9fb868304",
    measurementId: "G-ET81GWXHE2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;