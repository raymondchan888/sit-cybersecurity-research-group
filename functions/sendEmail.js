const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/submit-form', async (req, res) => {
  try {
    // Retrieve form data from the request body
    const { name, email, message } = req.body;

    // Compose email content using the form data
    const subject = 'Inquiry for SIT Research Group';
    const body = `Name: ${name},\n\nEmail: ${email}.\n\n${message}\n\n`;

    // Create a transporter with your email service provider configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'mageryan1@gmail.com',
        pass: 'fabuliser28',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'mageryan1@gmail.com',
      to: 'mageryan1@gmail.com',
      subject,
      text: body,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    // Handle any errors
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email.');
  }
});

module.exports = app;
