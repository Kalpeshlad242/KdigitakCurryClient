// src/sagas/index.ts
import { all, fork } from 'redux-saga/effects';
import  authSaga  from '../features/Login/saga';

export default function* rootSaga() {
  yield all([
    fork(authSaga)
  ]);
}
