import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload } from './type';

// Use base URL from environment variables
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function loginApi(payload: LoginPayload) {
  return axios.post(`${API_BASE_URL}/login`, payload);
}

function* handleLogin(action: PayloadAction<LoginPayload>): Generator<any, void, any> {
  try {
    const response = yield call(loginApi, action.payload);
    yield put(loginSuccess({ token: response.data.token }));
  } catch (error: any) {
    yield put(loginFailure(error.response?.data?.message || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}
