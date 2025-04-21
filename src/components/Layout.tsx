import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">EduDash</div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-item">🏠 Home</NavLink>
          <NavLink to="/instructor" className="nav-item">📄 Instructor</NavLink>
          <NavLink to="/courses" className="nav-item">📚 Courses</NavLink>
          <NavLink to="/lectures" className="nav-item">👨‍🏫 Lectures</NavLink>
          <NavLink to="/Lecturer-List" className="nav-item">📄 Lectuers</NavLink>
        </nav>
        <div className="logout">🚪 Logout</div>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
