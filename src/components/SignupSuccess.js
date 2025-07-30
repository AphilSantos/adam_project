import React, { useEffect, useState } from 'react';

const SignupSuccess = ({ onComplete, userType = 'brand' }) => {
  const [stage, setStage] = useState('loading'); // loading -> success -> fadeOut

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStage('success');
    }, 800);

    const timer2 = setTimeout(() => {
      setStage('fadeOut');
    }, 2200);

    const timer3 = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className={`signup-success-overlay ${stage}`}>
      <div className="signup-success-content">
        {stage === 'loading' && (
          <div className="loading-stage">
            <div className="loading-spinner">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>
            <p className="loading-text">Setting up your account...</p>
          </div>
        )}
        
        {(stage === 'success' || stage === 'fadeOut') && (
          <div className="success-stage">
            <div className="success-icon">
              <div className="checkmark">
                <div className="checkmark-circle"></div>
                <div className="checkmark-stem"></div>
                <div className="checkmark-kick"></div>
              </div>
            </div>
            <h2 className="success-title">Welcome to DraftBoard!</h2>
            <p className="success-message">
              {userType === 'brand' 
                ? 'Your brand account has been created successfully. Get ready to discover amazing creators!'
                : 'Your creator account has been created successfully. Get ready to win amazing rewards!'
              }
            </p>
            <div className="success-dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupSuccess;