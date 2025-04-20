import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Lecture, LectureState } from "./type";

const initialState: LectureState = {
  lectures: [],
  loading: false,
  error: null,
};

const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    fetchLecturesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLecturesSuccess(state, action: PayloadAction<Lecture[]>) {
      state.lectures = action.payload;
      state.loading = false;
    },
    fetchLecturesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchLecturesStart,
  fetchLecturesSuccess,
  fetchLecturesFailure,
} = lectureSlice.actions;

export default lectureSlice.reducer;
