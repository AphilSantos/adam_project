import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Determine which signup link to show based on current route
  const getSignupLink = () => {
    if (location.pathname === '/creators') {
      return '/signup/creator';
    }
    return '/signup/brand'; // Default to brand signup
  };

  const getSignupText = () => {
    if (location.pathname === '/creators') {
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
          <Link to="/">For Brands</Link>
          <Link to="/creators">For Creators</Link>
          <Link to={getSignupLink()} className="login-btn">{getSignupText()}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;