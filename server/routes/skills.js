import express from 'express';
import { body, validationResult } from 'express-validator';
import Skill from '../models/Skill.js';

const router = express.Router();

// GET /api/skills - Get all skills
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = {};
    if (category && ['Frontend', 'Backend', 'Tools', 'Soft Skills'].includes(category)) {
      query.category = category;
    }

    const skills = await Skill.find(query).sort({ category: 1, order: 1 });

    res.json({
      success: true,
      data: skills
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch skills',
      error: error.message
    });
  }
});

// POST /api/skills - Create new skill (admin only)
router.post('/', [
  body('name').isLength({ min: 1, max: 50 }).trim(),
  body('level').isInt({ min: 0, max: 100 }),
  body('category').isIn(['Frontend', 'Backend', 'Tools', 'Soft Skills']),
  body('icon').isLength({ min: 1 }).trim()
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

    const skill = new Skill(req.body);
    await skill.save();

    res.status(201).json({
      success: true,
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create skill',
      error: error.message
    });
  }
});

// PUT /api/skills/:id - Update skill (admin only)
router.put('/:id', [
  body('name').isLength({ min: 1, max: 50 }).trim(),
  body('level').isInt({ min: 0, max: 100 }),
  body('category').isIn(['Frontend', 'Backend', 'Tools', 'Soft Skills']),
  body('icon').isLength({ min: 1 }).trim()
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

    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.json({
      success: true,
      data: skill
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update skill',
      error: error.message
    });
  }
});

// DELETE /api/skills/:id - Delete skill (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: 'Skill not found'
      });
    }

    res.json({
      success: true,
      message: 'Skill deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete skill',
      error: error.message
    });
  }
});

export default router;