import { SKILLS_USER_ACTION_TYPES } from './skillsUser.types';
import { USER_ACTION_TYPES } from '../user/user.types';
const INITIAL_STATE = {
  skillsUser: null,
  isLoading: false,
  error: null,
};

export const skillsUserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_START:
        return {...state,isLoading:true,error:null}
    case SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_SUCCESS:
        return {...state,skillsUser:{...state.skillsUser,...payload},isLoading:false,error:null}
    case SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_FAILURE:
        return {...state,error:payload,isLoading:false}
    case SKILLS_USER_ACTION_TYPES.SUBMIT_ASSIGNMENT_START:
      return {...state,isLoading:true,error:null}
    case SKILLS_USER_ACTION_TYPES.SUBMIT_ASSIGNMENT_SUCCESS:
      return {...state,isLoading:false,error:null}
    case SKILLS_USER_ACTION_TYPES.SUBMIT_ASSIGNMENT_FAILURE:
      return {...state,isLoading:false,error:payload}
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return { ...state, skillsUser: null ,error:null};
    default:
        return state
  }
};
