import { call, put ,takeLatest} from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  fetchInstructorLectures,
  fetchInstructorLecturesSuccess,
  fetchInstructorLecturesFailure,
} from "./slice";
import { InstructorLecture } from "./type";
import axios from "axios";

function* handleFetchInstructorLectures(): SagaIterator {
  try {
    const response = yield call(axios.get, "/api/instructor/lectures");
    yield put(fetchInstructorLecturesSuccess(response.data));
  } catch (error: any) {
    yield put(fetchInstructorLecturesFailure(error.message));
  }
}

export default function* instructorSaga() {
  yield takeLatest(fetchInstructorLectures.type, handleFetchInstructorLectures);
}
