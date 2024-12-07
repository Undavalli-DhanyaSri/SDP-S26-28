import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Alert,
  Button,
} from '@mui/material';
import '../styles/Attendance.css';

const attendanceData = [
  { courseCode: "22UC3209", courseDesc: "PROBLEM SOLVING & REASONING SKILLS-2", totalConducted: 28, totalAttended: 28 },
  { courseCode: "22SDCS03A", courseDesc: "JAVA FULL STACK DEVELOPMENT + MICROSERVICES", totalConducted: 24, totalAttended: 24 },
  { courseCode: "22SDCS03A", courseDesc: "JAVA FULL STACK DEVELOPMENT + MICROSERVICES", totalConducted: 56, totalAttended: 44 },
  { courseCode: "22PH4101", courseDesc: "QUANTUM PHYSICS FOR ENGINEERS", totalConducted: 46, totalAttended: 34 },
  { courseCode: "22PH4101", courseDesc: "QUANTUM PHYSICS FOR ENGINEERS", totalConducted: 32, totalAttended: 26 },
  { courseCode: "22UC0023", courseDesc: "SOCIAL IMMERSIVE LEARNING", totalConducted: 1, totalAttended: 1 },
  { courseCode: "22CS2239F", courseDesc: "SOFTWARE VERIFICATION & VALIDATION", totalConducted: 32, totalAttended: 28 },
  { courseCode: "22CS2239F", courseDesc: "SOFTWARE VERIFICATION & VALIDATION", totalConducted: 30, totalAttended: 22 },
  { courseCode: "22DSB3101A", courseDesc: "DATA ANALYTICS AND VISUALIZATION", totalConducted: 32, totalAttended: 30 },
  { courseCode: "22DSB3101A", courseDesc: "DATA ANALYTICS AND VISUALIZATION", totalConducted: 34, totalAttended: 28 },
  { courseCode: "22DSB3101A", courseDesc: "DATA ANALYTICS AND VISUALIZATION", totalConducted: 56, totalAttended: 54 },
  { courseCode: "22DSB3202", courseDesc: "DATA WAREHOUSING & MINING", totalConducted: 26, totalAttended: 26 },
  { courseCode: "22DSB3202", courseDesc: "DATA WAREHOUSING & MINING", totalConducted: 28, totalAttended: 24 },
  { courseCode: "21UC0015", courseDesc: "GLOBAL LOGIC BUILDING CONTEST PRACTICUM", totalConducted: 26, totalAttended: 24 },
  { courseCode: "22CVQ5SM", courseDesc: "Coding & VQR Training", totalConducted: 89, totalAttended: 81 },
  { courseCode: "21CC3088", courseDesc: "TABLEAU DESKTOP SPECIALIST CERTIFICATION-TDS-C01", totalConducted: 44, totalAttended: 34 },
];

const Attendance = () => {
  const calculatePercentage = (attended, total) => {
    return Math.round((attended / total) * 100);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  const handleAttendanceAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <Container maxWidth="lg" className="attendance-container">
      <Box className="attendance-header">
        <Typography variant="h4" className="attendance-title">Attendance Summary</Typography>
        <Typography variant="body1" className="attendance-description">
          Check your attendance status and manage leaves.
        </Typography>
      </Box>

      {alertVisible && (
        <Alert severity="warning" className="attendance-alert">
          Attendance for one or more subjects is below 75%! Please take action.
        </Alert>
      )}

      <TableContainer component={Paper} className="attendance-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Course Code</strong></TableCell>
              <TableCell><strong>Course Description</strong></TableCell>
              <TableCell align="center"><strong>Total Conducted</strong></TableCell>
              <TableCell align="center"><strong>Total Attended</strong></TableCell>
              <TableCell align="center"><strong>Percentage</strong></TableCell>
              <TableCell align="center"><strong>Status</strong></TableCell>
              <TableCell align="center"><strong>Register</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.map((subject, index) => {
              const attendancePercentage = calculatePercentage(subject.totalAttended, subject.totalConducted);
              const attendanceStatus = attendancePercentage >= 75 ? "Satisfactory" : "Low";

              if (attendancePercentage < 75 && !alertVisible) {
                handleAttendanceAlert();
              }

              return (
                <TableRow key={index}>
                  <TableCell>{subject.courseCode}</TableCell>
                  <TableCell>{subject.courseDesc}</TableCell>
                  <TableCell align="center">{subject.totalConducted}</TableCell>
                  <TableCell align="center">{subject.totalAttended}</TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LinearProgress
                        variant="determinate"
                        value={attendancePercentage}
                        sx={{
                          width: '100%',
                          mr: 1,
                          bgcolor: attendancePercentage < 75 ? '#ffcccb' : '#e0e0e0',
                        }}
                      />
                      {attendancePercentage}%
                    </Box>
                  </TableCell>
                  <TableCell align="center" style={{ color: attendancePercentage >= 75 ? 'green' : 'red' }}>
                    {attendanceStatus}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="register-button"
                    >
                      Register
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Attendance;
