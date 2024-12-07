import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import AcademicRegistration from './components/AcademicRegistration';
import Attendance from './components/Attendance';
import Courses from './components/Courses';
import Exams from './components/Exams';
import FeePayments from './components/FeePayments';
import Hostel from './components/Hostel';
import StudentClubs from './components/StudentClubs';
import Transport from './components/Transport';
import Appbar from './components/Appbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Payments from "./components/Payments";


function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/payment" element={<Payments />}  />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<SignUp />}  />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/academic-registration" element={<AcademicRegistration />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/fee-payments" element={<FeePayments />} />
        <Route path="/hostel" element={<Hostel />} />
        <Route path="/student-clubs" element={<StudentClubs />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </Router>
  );
}

export default App;
