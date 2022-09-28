import { SKILLS_USER_ACTION_TYPES } from "./skillsUser.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchDomainRegistrationStart = () =>
  createAction(SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_START, {});

export const fetchDomainRegistrationSuccess = (domainReg) =>
  createAction(SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_SUCCESS, domainReg);

export const fetchDomainRegistrationFailure = (error) =>
  createAction(SKILLS_USER_ACTION_TYPES.FETCH_REGISTERED_DOMAIN_FAILURE, error);
