import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesFailure,
} from "./slice";
import { Course } from "./type";
import { SagaIterator } from "redux-saga";

function* handleFetchCourses(): SagaIterator {
  try {
    const response: { data: Course[] } = yield call(axios.get, "/api/courses");
    yield put(fetchCoursesSuccess(response.data));
  } catch (error: any) {
    yield put(fetchCoursesFailure(error.message));
  }
}

export function* courseSaga(): SagaIterator {
  yield takeLatest(fetchCoursesStart.type, handleFetchCourses);
}
