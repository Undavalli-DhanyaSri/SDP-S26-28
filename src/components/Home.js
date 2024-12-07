import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import logo from './assets/logo.png'; // Ensure the path to your logo is correct

const HomePage = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: 'Academic Registration', path: '/academic-registration' },
    { label: 'Attendance', path: '/attendance' },
    { label: 'Courses', path: '/courses' },
    { label: 'Exams', path: '/exams' },
    { label: 'Fee Payments', path: '/fee-payments' },
    { label: 'Hostel', path: '/hostel' },
    { label: 'Student Clubs', path: '/student-clubs' },
    { label: 'Transport', path: '/transport' }
  ];

  return (
    <div className="home-container">
      {/* Logo with clickable functionality */}
      <div 
        className="center-logo" 
        onClick={() => navigate('/login')} 
        style={{ cursor: 'pointer' }}
      >
        <img src={logo} alt="ERP System Logo" className="logo-image" />
      </div>

      {/* Circular button layout */}
      <div className="button-circle">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`circle-button circle-button-${index}`}
            onClick={() => navigate(button.path)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;