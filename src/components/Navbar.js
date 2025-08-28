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
          <Link to="/">
            <img src="/logo.svg" alt="DraftBoard Logo" className="logo-image" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/brand">For Brands</Link>
          <Link to="/creator">For Creators</Link>
          <Link to="/dash" className="login-btn">
            {getSignupText()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;