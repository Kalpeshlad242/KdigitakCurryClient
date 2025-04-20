import { useState, useEffect } from 'react';

interface User {
  username: string;
  role: string;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    } else {
      setIsAuthenticated(false); // Ensure false when no token or user is found
    }
  }, []);

  const loginUser = (username: string, password: string) => {
    // Simulate login here (for now)
    const token = 'fake-jwt-token';
    const user = { username, role: 'admin' };

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    setIsAuthenticated(true);
    setUser(user);
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    loginUser,
    logoutUser
  };
};

export default useAuth;
