import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>CreatorHub</h2>
        </div>
        <div className="nav-links">
          <Link to="/">For Brands</Link>
          <Link to="/creators">For Creators</Link>
          <button className="login-btn">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;