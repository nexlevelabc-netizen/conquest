const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Resend } = require('resend');

const app = express();
const upload = multer();

// ============================================
// CONFIGURATION
// ============================================
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL || 'enquiries@conquest-property.co.uk';
const FROM_EMAIL = process.env.FROM_EMAIL || 'website@conquest-property.co.uk';
const PORT = process.env.PORT || 3000;

if (!RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY environment variable is required');
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);

// ============================================
// MIDDLEWARE
// ============================================
// Enable CORS for all origins (your website + local dev)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
}));

// Handle preflight OPTIONS requests explicitly
app.options('*', cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'Conquest Property Forms API is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// FORM SUBMISSION ENDPOINT
// ============================================
app.post('/api/contact', upload.none(), async (req, res) => {
  try {
    const formData = req.body;
    const formName = formData.form_name || 'Website Enquiry';

    // Build email HTML from form fields
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #081f43; border-bottom: 3px solid #C7FE01; padding-bottom: 10px;">
          New Form Submission
        </h2>
        <p style="color: #666; font-size: 14px; margin-bottom: 20px;">
          Form: <strong>${formName}</strong><br>
          Submitted: ${new Date().toLocaleString('en-GB')}
        </p>
        <table style="width: 100%; border-collapse: collapse;">
    `;

    // Add each form field to the email
    const excludedFields = ['form_name', '_subject'];
    for (const [key, value] of Object.entries(formData)) {
      if (excludedFields.includes(key) || !value) continue;
      
      // Format the field name (e.g. first_name -> First Name)
      const label = key
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
      
      htmlContent += `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 10px; width: 35%; font-weight: bold; color: #081f43;">${label}</td>
          <td style="padding: 10px; color: #333;">${String(value).replace(/\n/g, '<br>')}</td>
        </tr>
      `;
    }

    htmlContent += `
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          This email was sent from the Conquest Property website contact form.
        </p>
      </div>
    `;

    const subject = formData._subject || `New Website Enquiry: ${formName}`;

    const { data, error } = await resend.emails.send({
      from: `Conquest Property <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: subject,
      html: htmlContent,
      reply_to: formData.email || undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Failed to send email. Please try again.' 
      });
    }

    console.log('Email sent:', data?.id);
    res.json({ success: true, message: 'Email sent successfully', id: data?.id });

  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Server error. Please try again later.' 
    });
  }
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
  console.log(`Conquest Property Forms API running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
