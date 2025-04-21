// src/features/LectureList/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lecture } from './type';

interface LectureState {
  lectures: Lecture[];
  loading: boolean;
  error: string | null;
  filters: {
    courseName: string;
    lectureDate: string;
    attendanceStatus: 'Attended' | 'Not Attended' | '';
  };
}

const initialState: LectureState = {
  lectures: [],
  loading: false,
  error: null,
  filters: {
    courseName: '',
    lectureDate: '',
    attendanceStatus: '',
  },
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
      state.loading = false;
      state.error = action.payload;
    },
    toggleAttendanceStatus(state, action: PayloadAction<{ id: string; status: 'Attended' | 'Not Attended' }>) {
      const lecture = state.lectures.find((lec) => lec.id === action.payload.id);
      if (lecture) {
        lecture.attendanceStatus = action.payload.status;
      }
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
  toggleAttendanceStatus,
  setLectureFilters,
} = lectureSlice.actions;

export default lectureSlice.reducer;
