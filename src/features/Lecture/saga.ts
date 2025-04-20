import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchLecturesStart,
  fetchLecturesSuccess,
  fetchLecturesFailure,
} from "./slice";
import { Lecture } from "./type";
import { AxiosResponse } from "axios";

function* handleFetchLectures(): Generator<any, void, AxiosResponse<Lecture[]>> {
  try {
    const response = yield call(axios.get, "/api/lectures");
    yield put(fetchLecturesSuccess(response.data));
  } catch (error: any) {
    yield put(fetchLecturesFailure(error.message));
  }
}

export function* lectureSaga() {
  yield takeLatest(fetchLecturesStart.type, handleFetchLectures);
}
