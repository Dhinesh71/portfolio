import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Security headers
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"]
    }
  },
  crossOriginEmbedderPolicy: false
});

// General rate limiting
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Maximum 100 requests per 15 minutes
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});

// Strict rate limiting for write operations
export const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Maximum 10 requests per hour
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});