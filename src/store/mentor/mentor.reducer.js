import { USER_ACTION_TYPES } from '../user/user.types';
import { MENTOR_ACTION_TYPES } from './mentor.types';
const INITIAL_STATE = {
  mentorDashboard: null,
  isLoading: false,
  error: null,
};

export const mentorReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MENTOR_ACTION_TYPES.FETCH_MENTOR_DASHBOARD_START:
        return {...state,isLoading:true,error:null}
    case MENTOR_ACTION_TYPES.FETCH_MENTOR_DASHBOARD_SUCCESS:
        return {...state,mentorDashboard:{...state.mentorDashboard,...payload},isLoading:false,error:null}
    case MENTOR_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_FAILURE:
        return {...state,error:payload,isLoading:false}
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
        return { ...state, mentorDashboard: null ,isLoading:false,error:null};
    default:
        return state
  }
};
