// src/components/Dashboard.js

import React from 'react';
import '../styles/Dashboard.css'; // Make sure this file exists
import erpImage1 from '../components/assets/erpImage1.jpg';
import erpImage2 from '../components/assets/erpImage2.jpg';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the ERP Dashboard</h2>
      <p>Here you can find key insights and updates related to the ERP system.</p>
      
      <div className="dashboard-content">
        <div className="dashboard-item">
          <img src={erpImage1} alt="ERP System" />
          <p>Feature Highlight: Advanced Reporting and Analytics for better decision-making.</p>
        </div>
        <div className="dashboard-item">
          <img src={erpImage2} alt="ERP Workflow" />
          <p>Latest Update: Enhanced integration with third-party applications.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
