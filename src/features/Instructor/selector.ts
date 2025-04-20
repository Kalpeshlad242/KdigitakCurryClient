// src/features/auth/authSelectors.ts
import { RootState } from '../../app/store';

export const selectInstructorLectures = (state: RootState) =>
  state.instructor.lectures;

export const selectInstructorLoading = (state: RootState) =>
  state.instructor.loading;

export const selectInstructorError = (state: RootState) =>
  state.instructor.error;
