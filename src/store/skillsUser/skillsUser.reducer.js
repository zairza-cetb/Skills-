import { SKILLS_USER_ACTION_TYPES } from './skillsUser.types';

const INITIAL_STATE = {
  skillsUser: null,
  isLoading: false,
  error: null,
};

export const skillsUserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_START:
        return {...state,isLoading:true,error:null}
    case SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_SUCCESS:
        return {...state,skillsUser:{...state.skillsUser,...payload},isLoading:false,error:null}
    case SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_FAILURE:
        return {...state,error:payload,isLoading:false}
    default:
        return state
  }
};
