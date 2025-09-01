import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dhineshjk17@gmail.com', // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD // You'll need to set this up in your environment variables
  }
});

export const sendEmail = async ({ name, email, subject, message }) => {
  const mailOptions = {
    from: email,
    to: 'dhineshjk17@gmail.com',
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
