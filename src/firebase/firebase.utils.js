import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDi940PMlGsTeuT_OTTyhI9CfARpcOFlW0",
    authDomain: "crwn-db-470df.firebaseapp.com",
    projectId: "crwn-db-470df",
    storageBucket: "crwn-db-470df.appspot.com",
    messagingSenderId: "775166545583",
    appId: "1:775166545583:web:4aa427ab1d1f838e134e5a",
    measurementId: "G-L1YHB8B4NF"
  };


firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

