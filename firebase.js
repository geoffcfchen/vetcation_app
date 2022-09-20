import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6l94Y3pUVVp33XwgSoP1x6E_dshY4hJw",
  authDomain: "vetcation-app.firebaseapp.com",
  projectId: "vetcation-app",
  storageBucket: "vetcation-app.appspot.com",
  messagingSenderId: "790244088702",
  appId: "1:790244088702:web:fa610d926b23331afeb12f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
