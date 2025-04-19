require('dotenv').config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

// Create Express app
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

// Verify email transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Email transporter error:", error);
  } else {
    console.log("Ready to Send");
  }
});

// API endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Send mail error:", error);
      res.status(500).json({ error: "Failed to send message" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// Export the Express app as a serverless function
module.exports = app;