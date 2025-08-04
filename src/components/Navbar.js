import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Determine which signup text to show based on current route
  const getSignupText = () => {
    if (location.pathname === '/creator' || location.pathname === '/creators') {
      return 'Join as Creator';
    }
    return 'Join as Brand'; // Default text
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>DraftBoard</h2>
        </div>
        <div className="nav-links">
          <Link to="/brand">For Brands</Link>
          <Link to="/creator">For Creators</Link>
          <a 
            href="https://draftboard-production.up.railway.app/login" 
            className="login-btn"
          >
            {getSignupText()}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;