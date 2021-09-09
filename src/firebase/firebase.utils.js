import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB3K9nl7esfXtfqY4AQURQnoVmtQ2yl_IA",
  authDomain: "login-5f89a.firebaseapp.com",
  projectId: "login-5f89a",
  storageBucket: "login-5f89a.appspot.com",
  messagingSenderId: "354822465816",
  appId: "1:354822465816:web:dfa94754390e2e67e1566d",
  measurementId: "G-6M7SB9THBS"
};




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;