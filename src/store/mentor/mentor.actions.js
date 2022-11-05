
import { createAction } from "../../utils/reducer/reducer.utils";
import { MENTOR_ACTION_TYPES } from "./mentor.types";

export const fetchMentorDashboardStart = () => createAction(MENTOR_ACTION_TYPES.FETCH_MENTOR_DASHBOARD_START, {});

export const fetchMentorDashboardSuccess = (payload) => createAction(MENTOR_ACTION_TYPES.FETCH_MENTOR_DASHBOARD_SUCCESS, payload);

export const fetchMentorDashboardFailure = (error) => createAction(MENTOR_ACTION_TYPES.FETCH_MENTOR_DASHBOARD_FAILURE, error);

export const submitMentorReviewStart = (data) => createAction(MENTOR_ACTION_TYPES.SUBMIT_MENTOR_REVIEW_START, data);

export const submitMentorReviewFailure = (error) => createAction(MENTOR_ACTION_TYPES.SUBMIT_MENTOR_REVIEW_FAILURE, error);