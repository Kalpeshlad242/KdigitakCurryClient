// src/features/Home/dashboardSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchDashboardStatsStart,
  fetchDashboardStatsSuccess,
  fetchDashboardStatsFailure,
} from './slice';
import { DashboardStats } from './type';

// Use environment variable for API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API = `${API_BASE_URL}/dashboard/stats`;

function* handleFetchDashboardStats() {
  try {
    const response: AxiosResponse<DashboardStats> = yield call(
      axios.get,
      API
    );
    yield put(fetchDashboardStatsSuccess(response.data));
  } catch (err: any) {
    yield put(fetchDashboardStatsFailure(err.message));
  }
}

export function* dashboardSaga() {
  yield takeLatest(fetchDashboardStatsStart.type, handleFetchDashboardStats);
}
