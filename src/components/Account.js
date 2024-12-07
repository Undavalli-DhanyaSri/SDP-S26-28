// src/components/Account.js

import React, { useState } from 'react';
import '../styles/Account.css';
import backgroundImage from '../components/assets/download (1).jpg'; // Adjust path based on file structure

function Account() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="account-container"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Inline style for background image
    >
      <div className="account-overlay"></div>
      <div className="account-box">
        <h2 className="account-title">Account Settings</h2>
        <div className="account-section">
          <h3>Password Management</h3>
          <p>Update your password to keep your account secure.</p>
          <button
            className={`account-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Change Password
          </button>
        </div>
        <div className="account-section">
          <h3>Notification Preferences</h3>
          <p>Manage email notifications and alerts.</p>
          <button
            className={`account-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Edit Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
