// src/features/Home/dashboardSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchDashboardStatsStart,
  fetchDashboardStatsSuccess,
  fetchDashboardStatsFailure,
} from './slice';
import { DashboardStats } from './type';

function* handleFetchDashboardStats() {
  try {
    const response: AxiosResponse<DashboardStats> = yield call(
      axios.get,
      '/api/dashboard/stats'
    );
    yield put(fetchDashboardStatsSuccess(response.data));
  } catch (err: any) {
    yield put(fetchDashboardStatsFailure(err.message));
  }
}

export function* dashboardSaga() {
  yield takeLatest(fetchDashboardStatsStart.type, handleFetchDashboardStats);
}
