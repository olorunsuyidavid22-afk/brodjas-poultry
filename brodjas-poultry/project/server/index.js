import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'brodjaspoultry@gmail.com',
      subject: `New contact message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.post('/api/order', async (req, res) => {
  const { name, phone, address, service, details } = req.body || {};
  if (!name || !phone || !address || !service) {
    return res.status(400).json({ error: 'Name, phone, address and service are required.' });
  }
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'brodjaspoultry@gmail.com',
      subject: `New order request from ${name} (${service})`,
      replyTo: process.env.EMAIL_USER,
      text: `Name: ${name}\nPhone: ${phone}\nAddress: ${address}\nService/Product: ${service}\n\nQuantity / Details:\n${details || 'Not provided'}`,
    });
    res.status(200).json({ success: true, message: 'Order request sent successfully.' });
  } catch (error) {
    console.error('Order email error:', error);
    res.status(500).json({ error: 'Failed to send order. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Brodjas Poultry server running on port ${PORT}`);
});
