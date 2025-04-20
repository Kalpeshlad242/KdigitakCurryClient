// src/features/Instructor/instructorSelectors.ts
import { RootState } from "../../app/store";

export const selectInstructors = (state: RootState) => state.instructor.instructors;
export const selectInstructorLoading = (state: RootState) => state.instructor.loading;
export const selectInstructorError = (state: RootState) => state.instructor.error;
