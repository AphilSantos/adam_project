import React, { useState } from 'react';
import './Dash.css';

const Dash = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="dash-container">
      {isLoading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Dashboard...</p>
        </div>
      )}
      <iframe
        src="https://draftboard-b44q.vercel.app/login"
        title="Dash Draft Board"
        className="dash-iframe"
        frameBorder="0"
        allowFullScreen
        onLoad={handleIframeLoad}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};

export default Dash;
