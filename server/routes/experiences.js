import express from 'express';
import { body, validationResult } from 'express-validator';
import Experience from '../models/Experience.js';

const router = express.Router();

// GET /api/experiences - Get all experiences
router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    
    let query = {};
    if (type && ['work', 'education'].includes(type)) {
      query.type = type;
    }

    const experiences = await Experience.find(query)
      .sort({ order: 1 });

    res.json({
      success: true,
      data: experiences
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch experiences',
      error: error.message
    });
  }
});

// POST /api/experiences - Create new experience (admin only)
router.post('/', [
  body('title').isLength({ min: 1, max: 100 }).trim(),
  body('company').isLength({ min: 1, max: 100 }).trim(),
  body('duration').isLength({ min: 1, max: 50 }).trim(),
  body('description').isLength({ min: 1, max: 500 }).trim(),
  body('type').isIn(['work', 'education']),
  body('achievements').isArray()
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

    const experience = new Experience(req.body);
    await experience.save();

    res.status(201).json({
      success: true,
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create experience',
      error: error.message
    });
  }
});

// PUT /api/experiences/:id - Update experience (admin only)
router.put('/:id', [
  body('title').isLength({ min: 1, max: 100 }).trim(),
  body('company').isLength({ min: 1, max: 100 }).trim(),
  body('duration').isLength({ min: 1, max: 50 }).trim(),
  body('description').isLength({ min: 1, max: 500 }).trim(),
  body('type').isIn(['work', 'education']),
  body('achievements').isArray()
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

    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.json({
      success: true,
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update experience',
      error: error.message
    });
  }
});

// DELETE /api/experiences/:id - Delete experience (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    
    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.json({
      success: true,
      message: 'Experience deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete experience',
      error: error.message
    });
  }
});

export default router;
