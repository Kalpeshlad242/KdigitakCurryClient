import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchLecturesStart,
  fetchLecturesSuccess,
  fetchLecturesFailure,
  createLectureStart,
  createLectureSuccess,
  createLectureFailure,
  deleteLectureStart,
  deleteLectureSuccess,
  deleteLectureFailure,
} from './slice';
import { Lecture } from './type';

// Use environment variable for API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API = `${API_BASE_URL}/api/lectures`;

function* fetchLecturesSaga() {
  try {
    const { data } = yield call(axios.get, API);
    yield put(fetchLecturesSuccess(data));
  } catch (error: any) {
    yield put(fetchLecturesFailure(error.message));
  }
}

function* createLectureSaga(action: { type: string; payload: Omit<Lecture, 'id'> }) {
  try {
    const { data } = yield call(axios.post, API, action.payload);
    yield put(createLectureSuccess(data));
  } catch (error: any) {
    yield put(createLectureFailure(error.message));
  }
}

function* deleteLectureSaga(action: { type: string; payload: string }) {
  try {
    yield call(axios.delete, `${API}/${action.payload}`);
    yield put(deleteLectureSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteLectureFailure(error.message));
  }
}

export function* lectureSaga() {
  yield takeLatest(fetchLecturesStart.type, fetchLecturesSaga);
  yield takeLatest(createLectureStart.type, createLectureSaga);
  yield takeLatest(deleteLectureStart.type, deleteLectureSaga);
}
