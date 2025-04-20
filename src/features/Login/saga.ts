import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { login, loginSuccess, loginFailure } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';

interface LoginApiResponse {
  token: string;
}

function loginApi(credentials: { username: string; password: string }): Promise<LoginApiResponse> {
  return axios.post('/api/login', credentials).then(response => response.data);
}

function* handleLogin(action: PayloadAction<{ username: string; password: string }>): Generator<any, void, any> {
  try {
    const fakeToken = 'fake-jwt-token'; // Simulated token
   // const response: LoginApiResponse = yield call(loginApi, action.payload);
    yield put(loginSuccess({ token: fakeToken }));
    // yield put(loginSuccess({ token: response.token }));
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(login.type, handleLogin);
}
