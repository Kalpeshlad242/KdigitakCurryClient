import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course, CourseState } from "./type";

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    // Fetch
    fetchCoursesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCoursesSuccess(state, action: PayloadAction<Course[]>) {
      state.loading = false;
      state.courses = action.payload;
    },
    fetchCoursesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Create
    createCourseStart(state, action: PayloadAction<Omit<Course, "id">>) {
      state.loading = true;
      state.error = null;
    },
    createCourseSuccess(state, action: PayloadAction<Course>) {
      state.loading = false;
      state.courses.push(action.payload);
    },
    createCourseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Update
    updateCourseStart(state, action: PayloadAction<Course>) {
      state.loading = true;
      state.error = null;
    },
    updateCourseSuccess(state, action: PayloadAction<Course>) {
      state.loading = false;
      const idx = state.courses.findIndex((c) => c.id === action.payload.id);
      if (idx >= 0) state.courses[idx] = action.payload;
    },
    updateCourseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    // Delete
    deleteCourseStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteCourseSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.courses = state.courses.filter((c) => c.id !== action.payload);
    },
    deleteCourseFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesFailure,
  createCourseStart,
  createCourseSuccess,
  createCourseFailure,
  updateCourseStart,
  updateCourseSuccess,
  updateCourseFailure,
  deleteCourseStart,
  deleteCourseSuccess,
  deleteCourseFailure,
} = courseSlice.actions;

export default courseSlice.reducer;
