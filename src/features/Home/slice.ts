// src/features/Home/dashboardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DashboardStats } from "./type";

const mockDashboardStats: DashboardStats = {
  totalCourses: 10,
  totalLectures: 50,
  totalInstructors: 5,
  monthlyTrends: [
    { month: "January", courses: 2, lectures: 10 },
    { month: "February", courses: 3, lectures: 15 },
    // other months
  ],
  schedulingConflicts: [
    // Add this line
    { instructor: "John Doe", conflicts: 2 },
    { instructor: "Jane Smith", conflicts: 0 },
    { instructor: "Mark Johnson", conflicts: 1 },
  ],
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
  name: "dashboard",
  initialState,
  reducers: {
    fetchDashboardStatsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDashboardStatsSuccess(state, action: PayloadAction<DashboardStats>) {
      state.loading = false;
      // You can use the actual data from the API in production
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
