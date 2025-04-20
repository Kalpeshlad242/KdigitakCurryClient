// src/features/auth/authSelectors.ts
import { RootState } from '../../app/store';

export const selectAuthError = (state: RootState) => state.auth.error;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated; // New selector for authentication status
