import { combineReducers } from "redux";
import { skillsUserReducer } from "./skillsUser/skillsUser.reducer";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  skillsUser: skillsUserReducer
});
