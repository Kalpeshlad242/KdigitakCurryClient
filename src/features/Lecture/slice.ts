import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lecture } from './type';

interface LectureState {
  lectures: Lecture[];
  loading: boolean;
  error: string | null;
}

const initialState: LectureState = {
  lectures: [],
  loading: false,
  error: null,
};

const lectureSlice = createSlice({
  name: 'lecture',
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
      state.error = action.payload;
      state.loading = false;
    },
    createLectureStart(state, _action: PayloadAction<Omit<Lecture, 'id'>>) {
      state.loading = true;
    },
    createLectureSuccess(state, action: PayloadAction<Lecture>) {
      state.lectures.push(action.payload);
      state.loading = false;
    },
    createLectureFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    deleteLectureStart(state, _action: PayloadAction<string>) {
      state.loading = true;
    },
    deleteLectureSuccess(state, action: PayloadAction<string>) {
      state.lectures = state.lectures.filter(l => l.id !== action.payload);
      state.loading = false;
    },
    deleteLectureFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchLecturesStart,
  fetchLecturesSuccess,
  fetchLecturesFailure,
  createLectureStart,
  createLectureSuccess,
  createLectureFailure,
  deleteLectureStart,
  deleteLectureSuccess,
  deleteLectureFailure,
} = lectureSlice.actions;

export default lectureSlice.reducer;
