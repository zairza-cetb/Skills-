import { takeLatest, put, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';
import { SKILLS_USER_ACTION_TYPES } from "./skillsUser.types";

import {
  fetchDomainRegistrationFailure,
  fetchDomainRegistrationStart,
  fetchDomainRegistrationSuccess,
  submitAssignmentFailure,
} from "./skillsUser.action";
import { getCurrentUserToken } from "../../utils/firebase/firebase.utils";
import { fetchRegisteredDomainSkillUser, submitUserAssignment } from "../../utils/api/api.utils";

export function* fetchDomainReg(){
  try{
    const idToken = yield call(getCurrentUserToken)
    const { domainRegistration } = yield call(fetchRegisteredDomainSkillUser,{idToken});
    yield put(fetchDomainRegistrationSuccess(domainRegistration));
}
catch(error){   
    yield put(fetchDomainRegistrationFailure(error));
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

export function* submitAssignment(data){
  try{
    const idToken = yield call(getCurrentUserToken)
    const response = yield call(submitUserAssignment,{idToken,submitAssignment:data.payload});
    toast.success("Assignment Submitted Successfully" , {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    yield put(fetchDomainRegistrationStart());
  }
  catch(error){
    console.log(error)
    yield put(submitAssignmentFailure(error));
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

export function* fetchDomainRegistrationOnStart(){
  yield takeLatest(SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_START,fetchDomainReg)
}

export function* submitAssignmentOnStart(){
  yield takeLatest(SKILLS_USER_ACTION_TYPES.SUBMIT_ASSIGNMENT_START,submitAssignment)
}

export function* skillUserSagas() {
  yield all([
    call(fetchDomainRegistrationOnStart),
    call(submitAssignmentOnStart)
  ]);
}
