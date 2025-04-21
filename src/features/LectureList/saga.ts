// src/features/LectureList/saga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchLecturesStart, fetchLecturesSuccess, fetchLecturesFailure } from './slice';
import { Lecture } from './type';

function* fetchLecturesSaga() {
  try {
    // Replace with actual API call
    const response: Lecture[] = yield call(() =>
      Promise.resolve([
        {
          id: '1',
          courseName: 'Mathematics 101',
          lectureDate: '2025-04-21',
          lectureTime: '10:00 AM',
          attendanceStatus: 'Attended',
        },
      ])
    );
    yield put(fetchLecturesSuccess(response));
  } catch (error) {
    yield put(fetchLecturesFailure('Failed to fetch lectures'));
  }
}

export function* lectureSaga() {
  yield takeLatest(fetchLecturesStart.type, fetchLecturesSaga);
}
