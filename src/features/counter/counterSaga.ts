// src/features/counter/counterSaga.ts
import { delay, put, takeEvery } from 'redux-saga/effects';
import { increment,incrementAsync } from './counterSlice';

function* handleIncrementAsync() {
  yield delay(1000); // simulate async call
  yield put(increment());
}

export function* counterSaga() {
  yield takeEvery(incrementAsync.type, handleIncrementAsync);
}
