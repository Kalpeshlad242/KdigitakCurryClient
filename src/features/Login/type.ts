export interface User {
  username: string;
  role: 'admin' | 'instructor';
}

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginSuccessPayload {
  token: string;
  user: User;
}
