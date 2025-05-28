
// src/components/Header.tsx

import React from 'react';

import { Link } from 'react-router-dom'; // Make sure this import exists!
import '../App.css'; // Assuming your header's styling is in App.css

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        {/* This links the "Hayes Lab" logo/text to the home/landing page */}
        <Link to="/" className="site-logo">Hayes Lab</Link>
      </div>
      <nav className="header-nav">
        {/* This is the CORRECT link for the "Tools" page */}
        <Link to="/tools" className="nav-link">Tools</Link>
        
        {/* These links are cosmetic and go nowhere for now, as per your request */}
        <a href="/contact" className="nav-link">Contact Us</a>
        <a href="/login" className="nav-link">Login/Register</a>
      </nav>
    </header>
  );
};

export default Header;