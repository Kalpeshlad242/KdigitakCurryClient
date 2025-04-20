import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../features/Login/useAuth';

interface PrivateRouteProps {
  children: React.ReactNode;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const { isAuthenticated, user } = useAuth();

  // 1. If not logged in, send to login
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  // 2. Now that TS knows `user` exists, grab the role
  const role = user.role;

  // 3. If the role isn't in our allowed list, send to /unauthorized
  if (!roles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  // 4. Otherwise render the protected page
  return <>{children}</>;
};

export default PrivateRoute;
