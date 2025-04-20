import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchDashboardStatsStart,
  fetchDashboardStatsSuccess,
  fetchDashboardStatsFailure,
} from "./slice";
import { DashboardStats } from "./type";
import { AxiosResponse } from "axios";

function* handleFetchDashboardStats(): Generator<any, void, AxiosResponse<DashboardStats>> {
  try {
    const response = yield call(axios.get, "/api/dashboard/stats");
    yield put(fetchDashboardStatsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchDashboardStatsFailure(error.message));
  }
}

export function* dashboardSaga() {
  yield takeLatest(fetchDashboardStatsStart.type, handleFetchDashboardStats);
}
