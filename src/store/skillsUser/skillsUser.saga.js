import { takeLatest, put, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';
import { SKILLS_USER_ACTION_TYPES } from "./skillsUser.types";

import {
    registerSkillsUserFailure,
  registerSkillsUserSuccess,
} from "./skillsUser.action";

import { updateUser} from "../../utils/api/api.utils";
import { getCurrentUserToken } from "../../utils/firebase/firebase.utils";

export function* registerSkillsUser({ payload : {user}}){

    try{
        const idToken = yield call(getCurrentUserToken)
        const registeredSkillsUser = yield call(updateUser,{user,idToken});
        yield put(registerSkillsUserSuccess(registeredSkillsUser));
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
        yield put(registerSkillsUserFailure(error));
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
export function* registerSkillsUserOnStart(){
    yield takeLatest(SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_START,registerSkillsUser)
}

export function* skillUserSagas() {
  yield all([
    call(registerSkillsUserOnStart)
  ]);
}
