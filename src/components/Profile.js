// src/components/Profile.js

import React, { useState } from 'react';
import '../styles/Profile.css';
import backgroundImage from '../components/assets/bg3.jpg'; // Adjust path based on file structure

function Profile() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="profile-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="profile-overlay"></div>
      <div className="profile-box">
        <h2 className="profile-title">User Profile</h2>
        <img src="../assets/profileImage.jpg" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Role:</strong> ERP Manager</p>
          <p><strong>Location:</strong> New York, USA</p>
          <button
            className={`profile-button ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
