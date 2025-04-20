import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InstructorLecture } from "./type";

interface InstructorState {
  lectures: InstructorLecture[];
  loading: boolean;
  error: string | null;
}

const initialState: InstructorState = {
  lectures: [],
  loading: false,
  error: null,
};

const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    fetchInstructorLectures: (state) => {
      state.loading = true;
    },
    fetchInstructorLecturesSuccess: (state, action: PayloadAction<InstructorLecture[]>) => {
      state.loading = false;
      state.lectures = action.payload;
    },
    fetchInstructorLecturesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchInstructorLectures,
  fetchInstructorLecturesSuccess,
  fetchInstructorLecturesFailure,
} = instructorSlice.actions;

export default instructorSlice.reducer;
