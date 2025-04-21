import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchLecturesSuccess, fetchLecturesFailure } from './slice';
import { api } from './api';  // Ensure api is correctly imported
import { Lecture } from './type';  // Import Lecture type for typing the response

// Define the return type of the fetchLecturesSaga as a generator function
function* fetchLecturesSaga(): Generator {
  try {
    // Call the API to fetch lectures
    const response: { data: Lecture[] } = yield call(api.fetchLectures);  // Add response type
    yield put(fetchLecturesSuccess(response.data));  // Dispatch success action with fetched data
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchLecturesFailure(error.message));  // Dispatch failure action with error message
    } else {
      yield put(fetchLecturesFailure('An unknown error occurred'));  // Handle other types of errors
    }
  }
}

// Watcher saga to trigger the fetchLecturesSaga
export function* watchFetchLectures() {
  yield takeLatest('lecture/fetchLecturesStart', fetchLecturesSaga);  // Listen for fetchLecturesStart action
}
