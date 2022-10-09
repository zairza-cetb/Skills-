import { takeLatest, put, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';
import { USER_ACTION_TYPES } from "./user.types";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
  registerUserSuccess,
  registerUserFailure,
} from "./user.action";

import {
  getCurrentUser,
  getCurrentUserToken,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import { createUser, updateUser, loginUser } from "../../utils/api/api.utils";

export function* getUserInfoFromAPI(userAuth) {
  try {
    const idToken = yield call(getCurrentUserToken);
    const userSnapshot = yield call(loginUser, {
      idToken: idToken,
    });
    yield put(signInSuccess({ ...userSnapshot}));
    toast.success('Successfully signed in',{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    if (
      error.message.includes("Request failed with status code 401") ||
      error.message.includes("Request failed with status code 404")
    ) {
      const idToken = yield call(getCurrentUserToken);
      const userSnapshot = yield call(createUser, { idToken });
      yield put(signUpSuccess({ ...userSnapshot}));
      toast.success('Successfully Signed Up',{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
     
      yield put(signInFailed(error));
      toast.error(error.message,{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
}



export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);

    yield call(getUserInfoFromAPI, user);
    
  } catch (error) {

    yield put(signInFailed(error));
    toast.error(error.message,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getUserInfoFromAPI, user);
  } catch (error) {
    yield put(signInFailed(error));
    toast.error(error.message,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    yield call(getUserInfoFromAPI, userAuth);
  } catch (error) {
    console.log(error);
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getUserInfoFromAPI, user);
  } catch (error) {
    yield put(signUpFailed(error));
    toast.error(error.message,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
    toast.error(error.message,{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

export function* registerUser({ payload : {user}}){

  try{
      const idToken = yield call(getCurrentUserToken)
      const registeredUser = yield call(updateUser,{user,idToken});
      yield put(registerUserSuccess(registeredUser));
      toast.success('Successfully Registered Skills User',{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
  }
  catch(error){   
      yield put(registerUserFailure(error));
      toast.error(error.message,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      
  }
}
export function* registerUserOnStart(){
  yield takeLatest(USER_ACTION_TYPES.REGISTER_USER_START,registerUser)
}



export function* signInAfterSignUp({ payload: { user } }) {
  yield call(getUserInfoFromAPI, user);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(registerUserOnStart),
    
  ]);
}
