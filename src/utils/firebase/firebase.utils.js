import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "skills-6cd94.firebaseapp.com",
  projectId: "skills-6cd94",
  storageBucket: "skills-6cd94.appspot.com",
  messagingSenderId: "749070757324",
  appId: "1:749070757324:web:2b042c4bb42db9e3edc169",

  // authDomain: "skills-3dc15.firebaseapp.com",
  // projectId: "skills-3dc15",
  // storageBucket: "skills-3dc15.appspot.com",
  // messagingSenderId: "127389409767",
  // appId: "1:127389409767:web:04dfa1dc2ca5abb1c89d42"

  // authDomain: "skills-f8403.firebaseapp.com",
  // projectId: "skills-f8403",
  // storageBucket: "skills-f8403.appspot.com",
  // messagingSenderId: "560668510955",
  // appId: "1:560668510955:web:5e7e6aba86e42967cb4cae",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  return await signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = async () => {
  return await signInWithRedirect(auth, googleProvider);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const getCurrentUserToken = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        userAuth.getIdToken().then(resolve).catch(reject);
      },
      reject
    );
  });
};
