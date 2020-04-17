import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUygmZIFZPOahx5j9GrY-HqXy0EL2sKu8",
  authDomain: "crwn-db-ecf56.firebaseapp.com",
  databaseURL: "https://crwn-db-ecf56.firebaseio.com",
  projectId: "crwn-db-ecf56",
  storageBucket: "crwn-db-ecf56.appspot.com",
  messagingSenderId: "259242159078",
  appId: "1:259242159078:web:d10f6ad13e8b79fdacc427",
  measurementId: "G-TZQHYWLFFV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
