import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useAuth from './features/Login/useAuth';
import LoginPage from './features/Login/Login';
import SignUpPage from './features/Signup/SignUpPage';
import Dashboard from './features/Dashboard/Dashboard'; // Corrected import path for Dashboard
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<PublicRoute component={LoginPage} 
        isAuthenticated={isAuthenticated} />} />
        <Route path="/signup" element={<PublicRoute component={SignUpPage} isAuthenticated={isAuthenticated} />} />

        {/* Private Routes */}
        <Route path="/dashboard" element={<PrivateRoute component={Dashboard} 
        isAuthenticated={isAuthenticated} />} />
        {/* Add more private routes here */}

        {/* Redirect to login if no match */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
