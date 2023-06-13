const express = require('express');
const app = express();

app.use(express.json());

app.post('/submit-form', (req, res) => {
  // Retrieve form data from the request body
  const { name, email, message } = req.body;

  // Compose email content using the form data
  const subject = 'Inquiry for SIT Research Group';
  const body = `Dear SIT Research Group,\n I am${name}.\n ${message}\n Best Regards, ${name}`;

  // Code to send the email using your chosen email library or service

  // Placeholder response
  res.status(200).send('Email sent successfully!');
});

module.exports = app;

