import { initializeApp } from 'firebase/app';
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

} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCkHRp4NeMGkpnBWlezWMW6XH819H_hPco",
  authDomain: "skills-f8403.firebaseapp.com",
  projectId: "skills-f8403",
  storageBucket: "skills-f8403.appspot.com",
  messagingSenderId: "560668510955",
  appId: "1:560668510955:web:5e7e6aba86e42967cb4cae",
  measurementId: "G-ED3BG6WPE9"
}

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>{
  signInWithPopup(auth, googleProvider);
}
export const signInWithGoogleRedirect = () =>{
  signInWithRedirect(auth, googleProvider);
}


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
