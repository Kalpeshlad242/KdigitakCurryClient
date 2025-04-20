// src/hooks/useAuth.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Adjust path if necessary
import { loginRequest, logout } from './slice'; // Adjust path if necessary
import axios from 'axios';

const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, token } = useSelector((state: RootState) => state.auth);

  const loginUser = async (username: string, password: string) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      dispatch(loginRequest(response.data.token)); // Ensure your login action sets `token` and `isAuthenticated`
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { isAuthenticated, token, loginUser, logoutUser };
};

export default useAuth;
