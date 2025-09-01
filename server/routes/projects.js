import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// GET /api/projects - Get all projects
router.get('/', async (req, res) => {
  try {
    const { featured, limit } = req.query;
    
    let query = {};
    if (featured === 'true') {
      query.featured = true;
    }

    const projects = await Project.find(query)
      .sort({ featured: -1, order: 1 })
      .limit(limit ? parseInt(limit) : 0);

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects',
      error: error.message
    });
  }
});

// GET /api/projects/:id - Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project',
      error: error.message
    });
  }
});



export default router;