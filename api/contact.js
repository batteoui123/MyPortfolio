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

// Routes
app.post("/api/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  
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
      res.status(500).json({ status: "Error", error: error });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Export for Vercel
module.exports = app;