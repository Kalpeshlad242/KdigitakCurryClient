import { call, put, takeLatest } from 'redux-saga/effects';
import { login, loginSuccess, loginFailure } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, LoginSuccessPayload } from './type';
import axios from 'axios';

function loginApi(credentials: LoginPayload): Promise<LoginSuccessPayload> {
  return axios.post('/api/login', credentials).then(res => res.data);
}

function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    // Simulated response (replace with actual API call)
    const response: LoginSuccessPayload = {
      token: 'mock-jwt-token',
      user: {
        username: action.payload.username,
        role: action.payload.username === 'admin' ? 'admin' : 'instructor',
      },
    };
    console.log("response=----",response)
    // const response: LoginSuccessPayload = yield call(loginApi, action.payload);
    yield put(loginSuccess(response));
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
  } catch (error: any) {
    yield put(loginFailure(error?.response?.data?.message || 'Login failed'));
  }
}

export default function* authSaga() {
  yield takeLatest(login.type, handleLogin);
}
