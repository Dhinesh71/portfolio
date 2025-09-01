import { Project, Skill, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Laundry Shop Billing',
    description: 'Full-stack MERN instant bill generation, and print-ready invoices.',
    longDescription: 'Automatically generate the total bill. The system is designed for quick calculations and easy printing, eliminating manual effort.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Dhinesh71/print_Receipt_project1',
    liveUrl: 'https://print-receipt-project1.vercel.app/login',
    imageUrl: '/src/data/p1.png',
    featured: true
  },
  

];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'Frontend', icon: 'Atom' },
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: 'Binary' },
  { name: 'Next.js', level: 88, category: 'Frontend', icon: 'RocketLaunch' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: 'Paintbrush' },
  { name: 'Framer Motion', level: 85, category: 'Frontend', icon: 'MousePointer' },
  
  // Backend
  { name: 'Node.js', level: 90, category: 'Backend', icon: 'CPU' },
  { name: 'Express.js', level: 88, category: 'Backend', icon: 'Webhook' },
  { name: 'MongoDB', level: 85, category: 'Backend', icon: 'Database' },
  { name: 'PostgreSQL', level: 82, category: 'Backend', icon: 'TableProperties' },
  { name: 'REST APIs', level: 92, category: 'Backend', icon: 'Network' },
  
  // Tools
  { name: 'Git', level: 90, category: 'Tools', icon: 'GitFork' },
  { name: 'Docker', level: 78, category: 'Tools', icon: 'Container' },
  { name: 'AWS', level: 75, category: 'Tools', icon: 'CloudCog' },
  { name: 'Figma', level: 88, category: 'Tools', icon: 'Pen' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'Soft Skills', icon: 'Lightbulb' },
  { name: 'Team Collaboration', level: 90, category: 'Soft Skills', icon: 'Users' },
  { name: 'Communication', level: 88, category: 'Soft Skills', icon: 'MessageCircle' },
  { name: 'Project Management', level: 85, category: 'Soft Skills', icon: 'CheckCircle' }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full-Stack Developer Intern',
    company: 'Corizo',
    duration: 'May 2025 - July 2025',
    description: 'Worked on web application development using MERN stack and gained hands-on industry exposure.',
    achievements: [
      'Built and tested features for client-based applications',
      'Worked with REST APIs and improved integration workflows',
      'Collaborated with team members on bug fixes and enhancements',
      'Learned best practices in version control and clean coding'
    ],
    type: 'work'
  },
  {
    id: '2',
    title: 'Freelance Full-Stack Developer',
    company: '6minds Labs',
    duration: '2024 - Present',
    description: 'Providing freelance web development services and building custom applications.',
    achievements: [
      'Developed real-time applications and client solutions using MERN stack',
      'Handled frontend and backend development with React, Node.js, and MongoDB',
      'Experimented with cloud deployment and DevOps practices',
      'Collaborated with clients to deliver tailored web solutions'
    ],
    type: 'work'
  },
  {
    id: '3',
    title: 'Bachelor of Engineering in Electronics and Communication (B.E. ECE)',
    company: 'College of Engineering',
    duration: '2021 - Present',
    description: 'Currently pursuing B.E. in ECE with a strong interest in web development and software engineering.',
    achievements: [
      'Built multiple academic and personal projects using MERN stack',
      'Completed a project on Fake News Detection using Machine Learning',
      'Participated in hackathons and coding competitions',
      'Actively learning advanced topics in full-stack development'
    ],
    type: 'education'
  }
];
