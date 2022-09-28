import { all, call } from "redux-saga/effects";
import { skillUserSagas } from "./skillsUser/skillsUser.saga";

import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(userSagas),call(skillUserSagas)]);
}
