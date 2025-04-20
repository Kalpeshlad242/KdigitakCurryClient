// src/features/auth/authSelectors.ts
import { RootState } from '../../app/store';

export const selectCourses = (state: RootState) => state.course.courses;
export const selectCourseLoading = (state: RootState) => state.course.loading;
export const selectCourseError = (state: RootState) => state.course.error;
