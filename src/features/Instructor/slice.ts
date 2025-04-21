import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Instructor, InstructorState } from "./type";

const initialState: InstructorState = {
  instructors: [],
  loading: false,
  error: null,
};

const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    fetchInstructorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchInstructorsSuccess(state, action: PayloadAction<Instructor[]>) {
      state.loading = false;
      state.instructors = action.payload;
    },
    fetchInstructorsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    createInstructorStart(
      state,
      action: PayloadAction<Omit<Instructor, "id">>,
    ) {
      state.loading = true;
      state.error = null;
    },
    createInstructorSuccess(state, action: PayloadAction<Instructor>) {
      state.loading = false;
      state.instructors.push(action.payload);
    },
    createInstructorFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateInstructorStart(state, action: PayloadAction<Instructor>) {
      state.loading = true;
      state.error = null;
    },
    updateInstructorSuccess(state, action: PayloadAction<Instructor>) {
      state.loading = false;
      const idx = state.instructors.findIndex(
        (i) => i.id === action.payload.id,
      );
      if (idx >= 0) state.instructors[idx] = action.payload;
    },
    updateInstructorFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteInstructorStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
    },
    deleteInstructorSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.instructors = state.instructors.filter(
        (i) => i.id !== action.payload,
      );
    },
    deleteInstructorFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchInstructorsStart,
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
  createInstructorStart,
  createInstructorSuccess,
  createInstructorFailure,
  updateInstructorStart,
  updateInstructorSuccess,
  updateInstructorFailure,
  deleteInstructorStart,
  deleteInstructorSuccess,
  deleteInstructorFailure,
} = instructorSlice.actions;

export default instructorSlice.reducer;
