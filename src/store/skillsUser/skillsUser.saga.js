import { takeLatest, put, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';
import { SKILLS_USER_ACTION_TYPES } from "./skillsUser.types";

import {
  fetchDomainRegistrationFailure,
  fetchDomainRegistrationSuccess,
} from "./skillsUser.action";
import { getCurrentUserToken } from "../../utils/firebase/firebase.utils";
import { fetchRegisteredDomainSkillUser } from "../../utils/api/api.utils";

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

export function* fetchDomainRegistrationOnStart(){
  yield takeLatest(SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_START,fetchDomainReg)
}
export function* skillUserSagas() {
  yield all([
    call(fetchDomainRegistrationOnStart)
  ]);
}
