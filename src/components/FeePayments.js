import React, { useState } from "react";
import { Box, Typography, Paper, TextField, MenuItem, Button, Grid } from "@mui/material";
import "../styles/FeePayments.css";
import { useNavigate } from "react-router-dom";

const FeePayments = () => {
  const [feeType, setFeeType] = useState("");
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const feeTypes = [
    { label: "Hostel Fee", value: "hostel" },
    { label: "Semester Fee", value: "semester" },
    { label: "Exam Fee", value: "exam" },
    { label: "Other Fees", value: "other" },
    { label: "Condonation Fee", value: "condonation" },
    { label: "Certification Fee", value: "certification" },
  ];

  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailValid = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i.test(email);
    const phoneValid = /^[0-9]{10}$/.test(phoneNumber);

    setEmailError(!emailValid);
    setPhoneError(!phoneValid);

    if (emailValid && phoneValid && feeType && amount && Number(amount) > 0) {
      navigate("/payment");
    }
  };

  return (
    <Box className="fee-container" sx={{ p: 4 }}>
      <Typography variant="h4" className="fee-title" gutterBottom>
        Fee Payment Portal
      </Typography>
      <Paper className="fee-payment-card" sx={{ p: 3, mt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              select
              label="Fee Type"
              value={feeType}
              onChange={(e) => setFeeType(e.target.value)}
              fullWidth
              required
              className="fee-input"
            >
              {feeTypes.map((type) => (
                <MenuItem key={type.value} value={type.label}>
                  {type.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
              required
              type="number"
              className="fee-input"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
              className="fee-input"
              error={emailError}
              helperText={emailError ? "Invalid email address." : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              required
              className="fee-input"
              error={phoneError}
              helperText={phoneError ? "Invalid phone number." : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              fullWidth
              multiline
              rows={3}
              className="fee-input"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              className="fee-button"
            >
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FeePayments;
