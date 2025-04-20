// src/sagas/index.ts
import { all, fork } from 'redux-saga/effects';
import { counterSaga } from '../features/counter/counterSaga';

export default function* rootSaga() {
  yield all([
    fork(counterSaga),
  ]);
}
