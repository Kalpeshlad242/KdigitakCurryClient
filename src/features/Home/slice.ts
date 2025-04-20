// src/features/Home/dashboardSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashboardStats } from './type';

// Define the mock data for DashboardStats
const mockDashboardStats: DashboardStats = {
  totalCourses: 10,
  totalLectures: 50,
  totalInstructors: 5,
};

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
      // Use mock data here instead of action payload
      state.stats = mockDashboardStats;
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
