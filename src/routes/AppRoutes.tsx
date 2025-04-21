// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Course } from '../features/Course';   // Importing from index.tsx
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../features/Login';
import SignUpPage from '../features/Signup';
import Dashboard from '../features/Home/Dashboard';
import Lecture from '../features/Lecture/Lecture'; // Ensure this is correct import for Lecture component
import Unauthorized from '../features/Unauthorized/Unauthorized';
import { Instructor } from '../features/Instructor';
import LectureList from '../features/LectureList';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={<PublicRoute><LoginPage /></PublicRoute>}
      />
      <Route
        path="/signup"
        element={<PublicRoute><SignUpPage /></PublicRoute>}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute roles={['admin', 'instructor']}>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/courses"
        element={
          <PrivateRoute roles={['admin', 'instructor']}>
            <Course />
          </PrivateRoute>
        }
      />

      {/* Change this route to match "/Lecturer-List" */}
      <Route
        path="/Lecturer-List"
        element={
          <PrivateRoute roles={['admin', 'instructor']}>
            <LectureList />
          </PrivateRoute>
        }
      />

      <Route
        path="/instructor"
        element={
          <PrivateRoute roles={['admin', 'instructor']}>
            <Instructor />
          </PrivateRoute>
        }
      />

      {/* Unauthorized & Fallback Route */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
};

export default AppRoutes;
