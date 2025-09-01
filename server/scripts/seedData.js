import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';

dotenv.config();

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN e-commerce solution with payment integration',
    longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    order: 1
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time data',
    longDescription: 'A powerful social media analytics dashboard that aggregates data from multiple platforms. Built with React and D3.js for interactive charts, featuring real-time updates, custom reports, and team collaboration tools.',
    technologies: ['React', 'D3.js', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/social-dashboard',
    liveUrl: 'https://social-dashboard-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    order: 2
  }
];

const skills = [
  // Frontend
  { name: 'React', level: 95, category: 'Frontend', icon: 'Code', order: 1 },
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: 'FileCode', order: 2 },
  { name: 'Next.js', level: 88, category: 'Frontend', icon: 'Zap', order: 3 },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: 'Palette', order: 4 },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'Backend', icon: 'Server', order: 1 },
  { name: 'Express.js', level: 88, category: 'Backend', icon: 'Route', order: 2 },
  { name: 'MongoDB', level: 85, category: 'Backend', icon: 'Database', order: 3 },
  { name: 'PostgreSQL', level: 82, category: 'Backend', icon: 'Layers', order: 4 },
  
  // Tools
  { name: 'Git', level: 90, category: 'Tools', icon: 'GitBranch', order: 1 },
  { name: 'Docker', level: 78, category: 'Tools', icon: 'Box', order: 2 },
  { name: 'AWS', level: 75, category: 'Tools', icon: 'Cloud', order: 3 },
  { name: 'Figma', level: 88, category: 'Tools', icon: 'Figma', order: 4 }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');

    console.log('Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Insert seed data
    await Project.insertMany(projects);
    await Skill.insertMany(skills);

    console.log('✅ Database seeded successfully');
    console.log(`📊 Inserted ${projects.length} projects`);
    console.log(`🛠️ Inserted ${skills.length} skills`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();