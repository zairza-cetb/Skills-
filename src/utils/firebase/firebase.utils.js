import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfJcNI1Z5XO6jSkaovLYVaCQt0mtZNjeU",
  authDomain: "skills-ace46.firebaseapp.com",
  projectId: "skills-ace46",
  storageBucket: "skills-ace46.appspot.com",
  messagingSenderId: "277355797930",
  appId: "1:277355797930:web:7e70bc5899b632f7d0dfd3",
  measurementId: "G-F3QV0Q4WPV",
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth,email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);

// export const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (userAuth) => {
//         unsubscribe();
//         resolve(userAuth);
//       },
//       reject
//     );
//   });
// };
