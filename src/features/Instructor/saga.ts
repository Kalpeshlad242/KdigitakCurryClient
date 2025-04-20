import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  fetchInstructorLectures,
  fetchInstructorLecturesSuccess,
  fetchInstructorLecturesFailure,
  createInstructorLecture,
  createInstructorLectureSuccess,
  createInstructorLectureFailure,
} from './slice';
import { InstructorLecture } from './type';
import axios from 'axios';
import { toast } from 'react-toastify';  // For notifications (example)

function* handleFetchInstructorLectures(): SagaIterator {
  try {
    // Show loading
    toast.info('Loading lectures...');

    const response = yield call(axios.get, '/api/instructor/lectures');
    yield put(fetchInstructorLecturesSuccess(response.data));

    // Hide loading and show success
    toast.success('Lectures fetched successfully!');
  } catch (error: any) {
    yield put(fetchInstructorLecturesFailure(error.message));

    // Show error message
    toast.error(`Failed to load lectures: ${error.message}`);
  }
}

function* handleCreateInstructorLecture(action: any): SagaIterator {
  try {
    // Show loading
    toast.info('Creating lecture...');

    const response = yield call(axios.post, '/api/instructor/lectures', action.payload);
    yield put(createInstructorLectureSuccess(response.data));

    // Show success
    toast.success('Lecture created successfully!');
  } catch (error: any) {
    yield put(createInstructorLectureFailure(error.message));

    // Show error
    toast.error(`Failed to create lecture: ${error.message}`);
  }
}

// Watcher saga to handle all the instructor-related actions
export default function* instructorSaga() {
  // Fetch lectures
  yield takeLatest(fetchInstructorLectures.type, handleFetchInstructorLectures);

  // Create lecture
  yield takeLatest(createInstructorLecture.type, handleCreateInstructorLecture);
}
