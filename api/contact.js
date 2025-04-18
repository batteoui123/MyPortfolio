const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Ensure EMAIL_USER is in your Vercel environment variables
    pass: process.env.EMAIL_PASS,  // Ensure EMAIL_PASS is in your Vercel environment variables
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, phone } = req.body;

    const mailOptions = {
      from: name,
      to: process.env.EMAIL_USER,  // Replace with your email
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    try {
      await contactEmail.sendMail(mailOptions);
      return res.status(200).json({ status: "Message Sent" });
    } catch (error) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
