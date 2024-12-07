import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField,
  MenuItem,
  Grid,
} from "@mui/material";
import "../styles/Hostel.css";

const Hostel = () => {
  const [activeModule, setActiveModule] = useState("Outpass");
  const [outpassReason, setOutpassReason] = useState("");
  const [outpassDate, setOutpassDate] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [semester, setSemester] = useState("");

  const semesters = [
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  const handleOutpassSubmit = () => {
    if (!outpassReason || !outpassDate) {
      alert("Please fill out all outpass details.");
      return;
    }
    alert(`Outpass request for ${outpassDate} submitted successfully!`);
    setOutpassReason("");
    setOutpassDate("");
  };

  const handleRoomRegistrationSubmit = () => {
    if (!roomNumber || !semester) {
      alert("Please fill out all room registration details.");
      return;
    }
    alert(`Room ${roomNumber} registered for ${semester} successfully!`);
    setRoomNumber("");
    setSemester("");
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case "Outpass":
        return (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Apply for Outpass
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Reason for Outpass"
                  value={outpassReason}
                  onChange={(e) => setOutpassReason(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date"
                  type="date"
                  value={outpassDate}
                  onChange={(e) => setOutpassDate(e.target.value)}
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOutpassSubmit}
                  fullWidth
                >
                  Submit Outpass
                </Button>
              </Grid>
            </Grid>
          </Paper>
        );
      case "RoomRegistration":
        return (
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Room Registration
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                label="Room Number"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
                fullWidth
                required
                placeholder="Enter your room number"
                sx={{ mb: 3 }}
              />
              <TextField
                label="Semester"
                select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                fullWidth
                required
              >
                {semesters.map((sem, index) => (
                  <MenuItem key={index} value={sem}>
                    {sem}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRoomRegistrationSubmit}
                sx={{ mt: 3 }}
              >
                Register Room
              </Button>
            </Box>
          </Paper>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="hostel-container">
      <Typography variant="h4" gutterBottom className="hostel-title">
        Hostel Management
      </Typography>
      <Typography className="hostel-description">
        Manage your hostel booking and services.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <Button
          variant={activeModule === "Outpass" ? "contained" : "outlined"}
          onClick={() => setActiveModule("Outpass")}
        >
          Outpass
        </Button>
        <Button
          variant={activeModule === "RoomRegistration" ? "contained" : "outlined"}
          onClick={() => setActiveModule("RoomRegistration")}
        >
          Room Registration
        </Button>
      </Box>
      {renderActiveModule()}
    </Box>
  );
};

export default Hostel;
