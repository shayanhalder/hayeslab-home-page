// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming your header's styling is in App.css

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Container for logo and text to keep them together */}
        <Link to="/" className="site-logo-container">
          {/* Add the SANA logo image here */}
          <img
            src="/src/assets/sana-logo-white.png"
            alt="SANA Logo"
            className="sana-logo"
          />
          <span className="site-logo-text">Hayes Lab</span>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/tools" className="nav-link">Tools</Link>
        <a href="#" className="nav-link">Contact Us</a>
        <a href="#" className="nav-link">Login/Register</a>
      </nav>
    </header>
  );
};

export default Header;