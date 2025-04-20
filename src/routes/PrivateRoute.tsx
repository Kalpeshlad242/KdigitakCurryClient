// src/routes/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../features/Login/useAuth';

interface PrivateRouteProps {
  children: React.ReactNode;
  roles: string[];
}

const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  // If the user is not authenticated or the user does not have the required role
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user && !roles.includes(user.role)) {
    // If the user does not have the required role
    return <Navigate to="/unauthorized" replace />;
  }

  // If authenticated and has the right role, render the children
  return <>{children}</>;
};

export default PrivateRoute;
