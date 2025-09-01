import express from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { securityHeaders, generalLimiter } from './middleware/security.js';
import errorHandler from './middleware/errorHandler.js';

// Routes
import projectRoutes from './routes/projects.js';
import contactRoutes from './routes/contact.js';
import skillRoutes from './routes/skills.js';
import experienceRoutes from './routes/experiences.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and performance middleware
app.use(securityHeaders);
app.use(compression());
app.use(generalLimiter);

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded files
app.use('/uploads', express.static('public/uploads'));

// Trust proxy for accurate IP addresses
app.set('trust proxy', 1);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/experiences', experienceRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`
🚀 Portfolio API Server Running
📍 Port: ${PORT}
🌍 Environment: ${process.env.NODE_ENV || 'development'}
🔗 API URL: http://localhost:${PORT}
📖 Health Check: http://localhost:${PORT}/health
  `);
});

export default app;