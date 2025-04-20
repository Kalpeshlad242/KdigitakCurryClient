import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import useAuth from './features/Login/useAuth';
import LoginPage from './features/Login/Login';
import SignUpPage from './features/Signup/SignUpPage';
import ProtectedPage from './routes/ProtectedPage';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/protected"
          element={isAuthenticated ? <ProtectedPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
