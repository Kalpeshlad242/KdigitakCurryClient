import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './features/Login/index';
import SignUpPage from './features/Signup/index';
import Dashboard from "./features/Home/Dashboard";
import Course from "./features/Course/Course";
import Lecture from "./features/Lecture/Lecture";

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={["admin", "instructor"]}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <PrivateRoute roles={["admin"]}>
              <Course />
            </PrivateRoute>
          }
        />
        <Route
          path="/lectures"
          element={
            <PrivateRoute roles={["instructor"]}>
              <Lecture />
            </PrivateRoute>
          }
        />

        {/* Default Redirect */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
