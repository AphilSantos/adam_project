import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WaitlistModal from './WaitlistModal';

const WaitlistButtonHandler = ({ children }) => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Check if we're on the waitlist page (now the homepage)
  const isOnWaitlistPage = location.pathname === '/';

  useEffect(() => {
    if (isOnWaitlistPage) {
      console.log('WaitlistButtonHandler: Active on homepage');
      
      // Add event listener to intercept all button clicks
      const handleButtonClick = (e) => {
        const target = e.target;
        
        // Find the actual clickable element (button, link, or clickable div)
        const clickableElement = target.closest('a, button, [role="button"], .cta-primary, .cta-secondary, .login-btn, .step-cta, .card-cta, .btn-primary, .btn-secondary');
        
        if (!clickableElement) {
          return; // Not a clickable element
        }

        console.log('Found clickable element:', clickableElement.tagName, clickableElement.className, clickableElement.href);

        // Don't intercept if it's the waitlist form itself or modal content
        if (target.closest('.waitlist-form') || 
            target.closest('.email-input') || 
            target.closest('.waitlist-submit-btn') ||
            target.closest('.modal-content') ||
            target.closest('.modal-overlay') ||
            target.closest('.modal-close-btn') ||
            target.closest('.modal-close-btn-secondary')) {
          console.log('Skipping waitlist form elements');
          return;
        }

        // Intercept ALL clicks and show waitlist modal (including navigation links)
        console.log('Intercepting click on:', clickableElement.tagName, clickableElement.className, clickableElement.href);
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        setIsModalOpen(true);
        return false;
      };

      // Use capture phase to intercept before other handlers
      document.addEventListener('click', handleButtonClick, true);

      return () => {
        document.removeEventListener('click', handleButtonClick, true);
      };
    }
  }, [isOnWaitlistPage]);

  return (
    <>
      {children}
      {isOnWaitlistPage && (
        <WaitlistModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
};

export default WaitlistButtonHandler; 