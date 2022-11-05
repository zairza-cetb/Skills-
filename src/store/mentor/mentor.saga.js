import { takeLatest, put, all, call } from "redux-saga/effects";
import { toast } from 'react-toastify';
import { getCurrentUserToken } from "../../utils/firebase/firebase.utils";
import { fetchMentorDashboardService } from "../../utils/api/api.utils";
import { MENTOR_ACTION_TYPES } from "./mentor.types";
import { fetchMentorDashboardFailure, fetchMentorDashboardSuccess } from "./mentor.actions";

export function* fetchMentorDashboard() {
    try {
        const idToken = yield call(getCurrentUserToken);
        const mentorDashboard = yield call(fetchMentorDashboardService, { idToken });
        console.log("MENTOR_DASH",mentorDashboard);
        yield put(fetchMentorDashboardSuccess(mentorDashboard));
    } catch (error) {
        yield put(fetchMentorDashboardFailure(error));
        toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
}
export function* submitMentorReview({ payload : review }) {
    
}
export function* fetchMentorDashboardOnStart(){
  yield takeLatest(MENTOR_ACTION_TYPES.FETCH_MENTOR_DASHBOARD_START,fetchMentorDashboard)
}

export function* submitMentorReviewOnStart(){
  yield takeLatest(MENTOR_ACTION_TYPES.SUBMIT_MENTOR_REVIEW_START,submitMentorReview)
}

export function* mentorSagas() {
  yield all([
    call(fetchMentorDashboardOnStart),
    call(submitMentorReviewOnStart)
  ]);
}
