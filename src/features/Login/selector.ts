import { RootState } from "../../app/store";

export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const selectUserRole = (state: RootState) => state.auth.user?.role;
export const selectUser = (state: RootState) => state.auth.user;
