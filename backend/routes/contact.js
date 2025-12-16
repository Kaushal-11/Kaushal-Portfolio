const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Validate email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    console.log('📨 Contact form submission received');
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: name, email, message'
      });
    }
    
    if (name.length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters'
      });
    }
    
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }
    
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters'
      });
    }
    
    // Check if email credentials are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('📧 Email credentials not set, simulating email send');
      
      // Simulate success for testing
      return res.status(200).json({
        success: true,
        message: 'Message received! (Email sending simulated - set up credentials to send real emails)',
        data: {
          name,
          email,
          message,
          timestamp: new Date().toISOString()
        }
      });
    }
    
    // Send actual email
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      
Time: ${new Date().toLocaleString()}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<hr>
<p><em>Received at: ${new Date().toLocaleString()}</em></p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully');
    
    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: {
        name,
        email,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ Email sending error:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET route for testing
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Contact API is working',
    endpoints: {
      post: 'POST /api/contact - Submit contact form',
      get: 'GET /api/contact - This info'
    }
  });
});

module.exports = router;