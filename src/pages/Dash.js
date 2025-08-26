import React from 'react';
import './Dash.css';

const Dash = () => {
  return (
    <div className="dash-container">
      <iframe
        src="https://draftboard-production.up.railway.app/"
        title="Dash Draft Board"
        className="dash-iframe"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Dash;
