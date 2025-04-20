import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../features/Login/useAuth';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setLoading(false); // Once authentication check is complete, stop loading
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking auth
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default PublicRoute;
