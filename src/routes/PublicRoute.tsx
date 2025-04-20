import React from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Component />;
};

export default PublicRoute;
