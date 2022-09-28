import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  userId:"",
  domainId:"",
  registrationId:"",
  domainName:"",
  mentors:[],
  tasks:[],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CLEAN_STATE: {
      return {
        ...initialState,
        isLoginError: "",
      };
    }
    case ActionTypes.DOMAIN_REGISTRATION_SUCCESS:
      return {
        ...state,
        userId:action.payload.userId,
        domainId:action.payload._id,
        domainName:action.payload.domainName,
        mentors:action.payload.mentors,
        tasks:action.payload.tasks,
      };

    case ActionTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoginLoading: false,
        phoneno: action.payload.phoneno || "",
        access: action.payload.access || null,
        id: action.payload.id || null,
        isRegistered: action.payload.isRegistered,
        isLoggedIn: action.payload.isLoggedIn,
        isSignedUp: true,
        type: action.payload.type,
        isLoginError: "",
        isLogout: false,
      };
    }

    case ActionTypes.LOGIN_USER_FAILURE: {
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: action.payload,
      };
    }

    case ActionTypes.SIGNUP_USER_START: {
      return {
        ...state,
        isSignupLoading: true,
        signupError: "",
      };
    }
    case ActionTypes.SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        firebaseUid:action.payload.firebaseUid,
        name:action.payload.name,
        phoneNumber:action.payload.phoneNumber,
        email:action.payload.email,
        registrationNumber:action.payload.registrationNumber,
        wing:action.payload.wing,
        branch:action.payload.branch,
        role:action.payload.role,
        member:action.payload.member,
        _id:action.payload._id,
        isSignedUp:true,
        isSignupLoading:false,
        signupError:""
      };
    }

    case ActionTypes.SIGNUP_USER_FAILURE: {
      return {
        ...state,
        isSignupLoading: false,
        isSignupError: action.payload,
      };
    }
    case ActionTypes.LOGOUT_SUCCESS: {
      return {
        ...initialState,
        isLogout: true,
      };
    }
    case ActionTypes.LOGOUT_FAILURE: {
      return {
        ...state,
        isLogoutErr: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authReducer;