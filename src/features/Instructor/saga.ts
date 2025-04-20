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

// Fetch all instructors
function* handleFetchInstructors() {
  try {
    const response: AxiosResponse<Instructor[]> = yield call(axios.get, "/api/instructors");
    yield put(fetchInstructorsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchInstructorsFailure(error.message));
  }
}

// Create instructor
function* handleCreateInstructor(action: ReturnType<typeof createInstructorStart>) {
  try {
    const response: AxiosResponse<Instructor> = yield call(axios.post, "/api/instructors", action.payload);
    yield put(createInstructorSuccess(response.data));
  } catch (error: any) {
    yield put(createInstructorFailure(error.message));
  }
}

// Update instructor
function* handleUpdateInstructor(action: ReturnType<typeof updateInstructorStart>) {
  try {
    const response: AxiosResponse<Instructor> = yield call(axios.put, `/api/instructors/${action.payload.id}`, action.payload);
    yield put(updateInstructorSuccess(response.data));
  } catch (error: any) {
    yield put(updateInstructorFailure(error.message));
  }
}

// Delete instructor
function* handleDeleteInstructor(action: ReturnType<typeof deleteInstructorStart>) {
  try {
    yield call(axios.delete, `/api/instructors/${action.payload}`);
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
