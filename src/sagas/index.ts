import { all } from 'redux-saga/effects';

// Import your individual sagas
import authSaga from '../features/Login/saga';
import instructorSaga from '../features/Instructor/saga';
import { courseSaga } from '../features/Course/saga';         // <- named!
import {lectureSaga} from '../features/Lecture/saga';
import {dashboardSaga} from '../features/Home/saga';

// Combine all sagas here
export default function* rootSaga() {
  yield all([
    authSaga(),
    instructorSaga(),
    courseSaga(),
    lectureSaga(),
    dashboardSaga(),
  ]);
}
