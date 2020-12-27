import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCNBEL-IqYQGQmKwVGP7Db04Xn95wxfqT8",
    authDomain: "crwn-db-34cb0.firebaseapp.com",
    projectId: "crwn-db-34cb0",
    storageBucket: "crwn-db-34cb0.appspot.com",
    messagingSenderId: "22264084600",
    appId: "1:22264084600:web:6d865838cd06710c01d58d",
    measurementId: "G-1DBVX51YJ4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
