// src/features/auth/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;  // Set isAuthenticated to true
      state.token = action.payload;  // Set the token in the state
    },
    logout: (state) => {
      state.isAuthenticated = false; // Set isAuthenticated to false
      state.token = null;             // Reset the token to null
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
