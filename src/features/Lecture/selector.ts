// src/features/auth/authSelectors.ts
import { RootState } from "../../app/store";

export const selectLectures = (state: RootState) => state.lecture.lectures;
export const selectLectureLoading = (state: RootState) => state.lecture.loading;
export const selectLectureError = (state: RootState) => state.lecture.error;
