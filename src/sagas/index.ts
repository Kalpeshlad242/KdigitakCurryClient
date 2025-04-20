// src/sagas/index.ts
import { all, fork } from 'redux-saga/effects';
import { counterSaga } from '../features/counter/counterSaga';
import  authSaga  from '../features/Login/saga';

export default function* rootSaga() {
  yield all([
    fork(counterSaga),
    fork(authSaga)
  ]);
}
