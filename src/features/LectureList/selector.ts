// src/features/auth/authSelectors.ts
import { RootState } from "../../app/store";
// selector.ts
export const selectLectures = (state: RootState) => state.lecture.lectures;

// Selector to get the filters from the state
export const selectLectureFilters = (state: RootState) =>
  state.lecturelist.filters;
