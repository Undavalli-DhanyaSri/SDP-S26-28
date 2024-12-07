import React from "react";
import "../styles/Payments.css";
import scanner from "./assets/scanner.png"; // Correctly importing the image

const Payments = () => {
  const handlePaymentMethod = (method) => {
    const sections = {
      internetBanking: document.getElementById("internet-banking"),
      upi: document.getElementById("upi"),
      card: document.getElementById("card"),
    };

    Object.values(sections).forEach((section) => (section.style.display = "none"));
    if (sections[method]) sections[method].style.display = "block";
  };

  return (
    <div className="payments-container">
      <div className="buttons-container">
        <button onClick={() => handlePaymentMethod("internetBanking")} className="payment-button">
          Pay using Internet Banking
        </button>
        <button onClick={() => handlePaymentMethod("upi")} className="payment-button">
          Pay using UPI
        </button>
        <button onClick={() => handlePaymentMethod("card")} className="payment-button">
          Pay using Credit/Debit Card
        </button>
      </div>

      <div id="internet-banking" className="payment-method" style={{ display: "none" }}>
        <h2>Internet Banking</h2>
        <form>
          <label>Username:</label>
          <input type="text" placeholder="Enter username" />
          <label>Bank Name:</label>
          <input type="text" placeholder="Enter bank name" />
          <label>Password:</label>
          <input type="password" placeholder="Enter password" />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="upi" className="payment-method" style={{ display: "none" }}>
        <h2>UPI</h2>
        <p>Scan the QR Code below:</p>
        <img src={scanner} alt="UPI Scanner" className="upi-scanner" />
      </div>

      <div id="card" className="payment-method" style={{ display: "none" }}>
        <h2>Credit/Debit Card</h2>
        <form>
          <label>Card Number:</label>
          <input type="text" placeholder="Enter card number" />
          <label>Expiry Date:</label>
          <input type="number" placeholder="MM" max="12" style={{ width: "60px" }} />
          <input type="number" placeholder="YYYY" style={{ width: "80px" }} />
          <label>CVV:</label>
          <input type="password" placeholder="Enter CVV" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Payments;
