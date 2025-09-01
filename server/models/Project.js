import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  longDescription: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  technologies: [{
    type: String,
    required: true,
    trim: true
  }],
  githubUrl: {
    type: String,
    required: true,
    trim: true
  },
  liveUrl: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for efficient querying
projectSchema.index({ featured: -1, order: 1 });

export default mongoose.model('Project', projectSchema);