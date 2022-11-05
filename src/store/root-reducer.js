import { combineReducers } from "redux";
import { mentorReducer } from "./mentor/mentor.reducer";
import { skillsUserReducer } from "./skillsUser/skillsUser.reducer";

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  skillsUser: skillsUserReducer,
  mentor:mentorReducer
});
