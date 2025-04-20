// src/features/auth/authTypes.ts

export interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    loading: boolean;
    error: string | null;
  }
  
  export interface LoginPayload {
    username: string;
    password: string;
  }
  
  export interface LoginSuccessPayload {
    token: string;
  }
  