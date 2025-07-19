// src/components/Header.tsx
import React from 'react';

import { Link } from 'react-router-dom'; // Make sure this import exists!
import '../App.css'; 

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Container for logo and text to keep them together */}
        <Link to="/" className="site-logo-container">
          {/* Add the SANA logo image here */}
          <img
            src="/assets/sana-logo-white.png"
            alt="SANA Logo"
            className="sana-logo"
          />
          <span className="site-logo-text">Hayes Lab</span>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/tools" className="nav-link">Tools</Link>
        <Link to="/publications" className="nav-link">Publications</Link>
        <a href="/contact" className="nav-link">Contact Us</a>
        <a href="/login" className="nav-link">Login/Register</a>
      </nav>
    </header>
  );
};

export default Header;