import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lecture } from './commonTypes';  // Ensure this is the correct path

// Define the state structure
interface LectureState {
  lectures: Lecture[];
  filters: {
    courseName: string;
    lectureDate: string;
    attendanceStatus: string;
  };
  loading: boolean;
  error: string | null;
}

// Initial state for the lecture slice
const initialState: LectureState = {
  lectures: [],
  filters: {
    courseName: '',
    lectureDate: '',
    attendanceStatus: '',
  },
  loading: false,
  error: null,
};

const lectureSlice = createSlice({
  name: 'lecturelist',
  initialState,
  reducers: {
    fetchLecturesStart(state) {
      state.loading = true;
    },
    fetchLecturesSuccess(state, action: PayloadAction<Lecture[]>) {
      state.lectures = action.payload;
      state.loading = false;
    },
    fetchLecturesFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setLectureFilters(state, action: PayloadAction<LectureState['filters']>) {
      state.filters = action.payload;
    },
  },
});

export const {
  fetchLecturesStart,
  fetchLecturesSuccess,
  fetchLecturesFailure,
  setLectureFilters,
} = lectureSlice.actions;

export default lectureSlice.reducer;
