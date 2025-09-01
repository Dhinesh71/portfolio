import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/emailService.js';

const router = express.Router();

// Rate limiting for contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Maximum 3 messages per 15 minutes
  message: {
    success: false,
    message: 'Too many messages sent. Please try again later.'
  }
});

// POST /api/contact - Submit contact form
router.post('/', contactLimiter, [
  body('name').isLength({ min: 2, max: 100 }).trim().escape(),
  body('email').isEmail().normalizeEmail(),
  body('subject').isLength({ min: 5, max: 200 }).trim().escape(),
  body('message').isLength({ min: 10, max: 2000 }).trim().escape()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;
    const ipAddress = req.ip || req.connection.remoteAddress;

    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress
    });

    await contact.save();
    
    // Send email
    await sendEmail({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      data: {
        id: contact._id,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.',
      error: error.message
    });
  }
});

// GET /api/contact - Get all messages (admin only)
router.get('/', async (req, res) => {
  try {
    const { status, limit = 50, page = 1 } = req.query;
    
    let query = {};
    if (status && ['new', 'read', 'replied'].includes(status)) {
      query.status = status;
    }

    const messages = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: messages,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch messages',
      error: error.message
    });
  }
});

export default router;