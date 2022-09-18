import { ActionTypes } from "../constants/actionTypes";



const userLoginStart = () => ({
  type: ActionTypes.LOGIN_USER_START,
});
const userLoginSuccess = (payload) => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
  payload: payload,
});
const domainRegistrationSuccess = (payload) => ({
    type:ActionTypes.DOMAIN_REGISTRATION_SUCCESS,
    payload:payload
})
const userLoginFailure = (message) => ({
  type: ActionTypes.LOGIN_USER_FAILURE,
  payload: message,
});
const userSignupStart = () => ({
  type: ActionTypes.SIGNUP_USER_START,
});
const userSignupSuccess = (payload) => ({
  type: ActionTypes.SIGNUP_USER_SUCCESS,
  payload: payload,
});
const userSignupFailure = (message) => ({
  type: ActionTypes.SIGNUP_USER_FAILURE,
  payload: message,
});

const userLogoutSuccess = (payload) => ({
  type: ActionTypes.LOGOUT_SUCCESS,
  payload: payload,
});

const userLogoutFailure = (payload) => ({
  type: ActionTypes.LOGOUT_FAILURE,
  payload: payload,
});

export const cleanStateAction = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CLEAN_STATE,
    });
  };
};
export const userSignUpAction = (data) => {
  dispatch(userSignupStart);
  return async (dispatch) => {
    createUserWithAxiosPost(data)
      .then(async (userData) => {
        const { firebaseUid,name,phoneNumber,email,registrationNumber,wing,branch,role,zairzaMember,_id:userId} = userData;
        const {domain} = userData;
        dispatch(userSignupSuccess({ firebaseUid,name,phoneNumber,email,registrationNumber,wing,branch,role,zairzaMember,userId}));
        domainRegistrationSuccess(domain)
      })
      .catch((err) => {
        dispatch(userSignupFailure(err));
      });
  };
};

export const userLoginAction = (data) => {
    return async (dispatch) => {
      dispatch(userLoginStart);
      createUserWithAxiosPost(data)
        .then(async (userData) => {
          const { firebaseUid,name,phoneNumber,email,registrationNumber,wing,branch,role,zairzaMember,_id} = userData;
          const {domain} = userData;
          dispatch(userLoginSuccess({ firebaseUid,name,phoneNumber,email,registrationNumber,wing,branch,role,zairzaMember,_id}));
          domainRegistrationSuccess(domain)
        })
        .catch((err) => {
          dispatch(userLoginFailure(err));
        });
    };
  };