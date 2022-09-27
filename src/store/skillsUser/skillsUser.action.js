import { SKILLS_USER_ACTION_TYPES } from "./skillsUser.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const registerSkillsUserStart = (user) =>
  createAction(SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_START, user);

export const registerSkillsUserSuccess = (user) =>
  createAction(SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_SUCCESS, user);

export const registerSkillsUserFailure = (error) =>
  createAction(SKILLS_USER_ACTION_TYPES.REGISTER_SKILLS_USER_FAILURE, error);
