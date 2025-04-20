// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Import AppRoutes

function App() {
  return (
    <Router>
      <AppRoutes /> {/* Render routes from AppRoutes */}
    </Router>
  );
}

export default App;
