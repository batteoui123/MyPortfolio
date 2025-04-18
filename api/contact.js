require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// Verify connection
contactEmail.verify((error) => {
  if (error) {
    console.log("Email verification error:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Health check (required for Render)
app.get('/health', (req, res) => res.sendStatus(200));

// Contact route
app.post("/api/contact", (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { name, email, message } = req.body;
  
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Send mail error:", error);
      res.status(500).json({ status: "Error", error: error.message });
    } else {
      res.status(200).json({ status: "Message Sent" });
    }
  });
});

// Start server (Render will set PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));