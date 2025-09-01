import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  current: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'freelance', 'internship'],
    required: true
  }
}, {
  timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
