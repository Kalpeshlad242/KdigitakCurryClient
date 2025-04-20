// src/features/Instructor/instructorSaga.ts
import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchInstructorsStart,
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
  createInstructorStart,
  createInstructorSuccess,
  createInstructorFailure,
  updateInstructorStart,
  updateInstructorSuccess,
  updateInstructorFailure,
  deleteInstructorStart,
  deleteInstructorSuccess,
  deleteInstructorFailure,
} from "./slice";
import { Instructor } from "./type";

// Base URL from environment
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API = `${API_BASE_URL}/instructors`;

// Fetch all instructors
function* handleFetchInstructors() {
  try {
    const response: AxiosResponse<Instructor[]> = yield call(axios.get, API);
    yield put(fetchInstructorsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchInstructorsFailure(error.message));
  }
}

// Create instructor
function* handleCreateInstructor(action: ReturnType<typeof createInstructorStart>) {
  try {
    const response: AxiosResponse<Instructor> = yield call(
      axios.post,
      API,
      action.payload
    );
    yield put(createInstructorSuccess(response.data));
  } catch (error: any) {
    yield put(createInstructorFailure(error.message));
  }
}

// Update instructor
function* handleUpdateInstructor(action: ReturnType<typeof updateInstructorStart>) {
  try {
    const { id, ...body } = action.payload;
    const response: AxiosResponse<Instructor> = yield call(
      axios.put,
      `${API}/${id}`,
      body
    );
    yield put(updateInstructorSuccess(response.data));
  } catch (error: any) {
    yield put(updateInstructorFailure(error.message));
  }
}

// Delete instructor
function* handleDeleteInstructor(action: ReturnType<typeof deleteInstructorStart>) {
  try {
    yield call(axios.delete, `${API}/${action.payload}`);
    yield put(deleteInstructorSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteInstructorFailure(error.message));
  }
}

// Watcher saga
export function* instructorSaga() {
  yield takeLatest(fetchInstructorsStart.type, handleFetchInstructors);
  yield takeLatest(createInstructorStart.type, handleCreateInstructor);
  yield takeLatest(updateInstructorStart.type, handleUpdateInstructor);
  yield takeLatest(deleteInstructorStart.type, handleDeleteInstructor);
}
