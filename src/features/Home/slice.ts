// src/features/Home/dashboardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardStats } from './type';

interface DashboardState {
  stats: DashboardStats | null;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  stats: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchDashboardStatsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardStatsSuccess(state, action: PayloadAction<DashboardStats>) {
      state.loading = false;
      state.stats = action.payload;
    },
    fetchDashboardStatsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDashboardStatsStart,
  fetchDashboardStatsSuccess,
  fetchDashboardStatsFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
