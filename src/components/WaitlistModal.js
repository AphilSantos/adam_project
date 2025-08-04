import React, { useState } from 'react';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClose = () => {
    if (!isLoading) {
      onClose();
      // Reset form when closing
      setEmail('');
      setIsSubmitted(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose}>&times;</button>
        
        <div className="modal-body">
          <div className="modal-header">
            <h2>Join the <span>Creator Revolution</span></h2>
            <p>Be among the first to experience the ultimate creator tryout marketplace.</p>
          </div>
          
          {!isSubmitted ? (
            <div className="waitlist-form-container">
              <form onSubmit={handleSubmit} className="waitlist-form">
                <div className="email-input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="email-input"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit" 
                    className="waitlist-submit-btn"
                    disabled={isLoading || !email}
                  >
                    {isLoading ? (
                      <div className="loading-spinner">
                        <div className="spinner-ring"></div>
                      </div>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                </div>
                <p className="form-subtext">Get early access and exclusive updates</p>
              </form>
            </div>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <div className="checkmark">
                  <div className="checkmark-circle"></div>
                  <div className="checkmark-stem"></div>
                  <div className="checkmark-kick"></div>
                </div>
              </div>
              <h3>You're on the list! 🎉</h3>
              <p>We'll notify you as soon as we launch. Get ready to start winning amazing rewards!</p>
              <button className="modal-close-btn-secondary" onClick={handleClose}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal; 