// App.tsx (or AppRoutes.tsx)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Course } from './features/Course';   // <–– our index.tsx export
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LoginPage from './features/Login';
import SignUpPage from './features/Signup';
import Dashboard from './features/Home/Dashboard';
import Lecture from './features/Lecture/Lecture';
import Unauthorized from './features/Unauthorized/Unauthorized';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route
          path="/login"
          element={<PublicRoute><LoginPage /></PublicRoute>}
        />
        <Route
          path="/signup"
          element={<PublicRoute><SignUpPage /></PublicRoute>}
        />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute roles={['admin', 'instructor']}>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* Course page as admin only */}
        <Route
          path="/courses"
          element={
            <PrivateRoute roles={['admin']}>
              <Course />
            </PrivateRoute>
          }
        />

        {/* Lecture page as instructor only */}
        <Route
          path="/lectures"
          element={
            <PrivateRoute roles={['instructor']}>
              <Lecture />
            </PrivateRoute>
          }
        />

        {/* Unauthorized & fallback */}
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
