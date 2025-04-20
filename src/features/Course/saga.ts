import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  createCourseStart,
  createCourseSuccess,
  createCourseFailure,
  updateCourseStart,
  updateCourseSuccess,
  updateCourseFailure,
  deleteCourseStart,
  deleteCourseSuccess,
  deleteCourseFailure,
} from "./slice";
import { Course } from "./type";

// Fetch all
function* handleFetchCourses() {
  try {
    const resp: AxiosResponse<Course[]> = yield call(axios.get, "/api/courses");
    yield put(fetchCoursesSuccess(resp.data));
  } catch (err: any) {
    yield put(fetchCoursesFailure(err.message));
  }
}

// Create
function* handleCreateCourse(action: ReturnType<typeof createCourseStart>) {
  try {
    const resp: AxiosResponse<Course> = yield call(
      axios.post,
      "/api/courses",
      action.payload
    );
    yield put(createCourseSuccess(resp.data));
  } catch (err: any) {
    yield put(createCourseFailure(err.message));
  }
}

// Update
function* handleUpdateCourse(action: ReturnType<typeof updateCourseStart>) {
  try {
    const { id, ...body } = action.payload;
    const resp: AxiosResponse<Course> = yield call(
      axios.put,
      `/api/courses/${id}`,
      body
    );
    yield put(updateCourseSuccess(resp.data));
  } catch (err: any) {
    yield put(updateCourseFailure(err.message));
  }
}

// Delete
function* handleDeleteCourse(action: ReturnType<typeof deleteCourseStart>) {
  try {
    yield call(axios.delete, `/api/courses/${action.payload}`);
    yield put(deleteCourseSuccess(action.payload));
  } catch (err: any) {
    yield put(deleteCourseFailure(err.message));
  }
}

export function* courseSaga() {
  yield takeLatest(fetchCoursesStart.type, handleFetchCourses);
  yield takeLatest(createCourseStart.type, handleCreateCourse);
  yield takeLatest(updateCourseStart.type, handleUpdateCourse);
  yield takeLatest(deleteCourseStart.type, handleDeleteCourse);
}
