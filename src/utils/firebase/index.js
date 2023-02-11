import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtBqna1PZTZo9HAXrJXhXE_V-KRizVG0A",
  authDomain: "crown-clothing-db-9d423.firebaseapp.com",
  projectId: "crown-clothing-db-9d423",
  storageBucket: "crown-clothing-db-9d423.appspot.com",
  messagingSenderId: "674873583491",
  appId: "1:674873583491:web:d24cd1f39eb36c51b278b6",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (uid, displayName, email) => {
  const userDocRef = doc(db, "users", uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      const createdAt = new Date();
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error(`error creating the user: ${error.message}`);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password, displayName) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
