const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:8082', 'http://localhost:3000'],
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    const { name, email, phone, company, budget, source, services, message } = formData;
    
    // Format selected services
    const selectedServices = Object.entries(services)
      .filter(([_, selected]) => selected)
      .map(([service]) => service)
      .join(', ');

    const { data, error } = await resend.emails.send({
      from: 'MeiFlume <contact@meiflume.com>',
      to: ['info@meiflume.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Services Interested In:</strong> ${selectedServices}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 