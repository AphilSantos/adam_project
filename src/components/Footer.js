import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CreatorHub</h3>
            <p>Performance-based creator marketing that actually works.</p>
            <div className="footer-contact">
              <p>1234 Innovation Drive</p>
              <p>San Francisco, CA 94105</p>
              <p>hello@creatorhub.com</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><a href="/">For Brands</a></li>
              <li><a href="/creators">For Creators</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/api-docs">API Docs</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 CreatorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;