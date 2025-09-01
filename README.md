# MERN Stack Portfolio Website

A modern, responsive portfolio website built with the MERN stack featuring beautiful animations, glassmorphism design, and a comprehensive backend API.

## 🚀 Features

### Frontend
- **React 18** with TypeScript for type safety
- **Framer Motion** for smooth animations and page transitions
- **Tailwind CSS** with custom design system
- **Glassmorphism** UI with purple gradient theme
- **Custom cursor** with particle trail effects
- **Responsive design** optimized for all devices
- **Scroll animations** using Intersection Observer
- **Contact form** with validation and EmailJS integration

### Backend
- **Node.js & Express** RESTful API
- **MongoDB** with Mongoose ODM
- **Input validation** and sanitization
- **Rate limiting** for security
- **CORS** configuration
- **Error handling** middleware
- **Database seeding** scripts

### Design System
- **Color Palette**: Purple gradient (#e0aaff → #10002b)
- **Typography**: Inter & Space Grotesk fonts
- **Animations**: Scroll-triggered, hover effects, micro-interactions
- **Components**: Reusable glassmorphic cards and buttons

## 🛠️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Framer Motion
- Tailwind CSS
- Lucide React (icons)
- React Router DOM

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- Express Validator
- Helmet (security)
- Rate Limiting

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Frontend Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and other configuration
   ```

4. **Seed the database:**
   ```bash
   npm run seed
   ```

5. **Start the server:**
   ```bash
   npm run dev
   ```

## 🌍 Environment Variables

Create a `.env` file in the server directory:

```env
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your_jwt_secret_here
```

## 📡 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills?category=Frontend` - Get skills by category
- `POST /api/skills` - Create skill (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get messages (admin)

### Health Check
- `GET /health` - Server health status

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color shades
  }
}
```

### Content
1. **Personal Information**: Update `src/data/portfolio.ts`
2. **Projects**: Add your projects to the projects array
3. **Skills**: Modify the skills array with your expertise
4. **Experience**: Update the experiences array

### Images
- Replace profile image URL in `About.tsx`
- Update project images in the projects data
- Use high-quality images from Pexels or your own assets

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Backend (Railway/Heroku)

1. **Set up MongoDB Atlas**
2. **Update environment variables**
3. **Deploy using your preferred platform**

### Environment Setup
- Set `NODE_ENV=production`
- Configure `MONGODB_URI` for production database
- Set `FRONTEND_URL` to your deployed frontend URL

## 📱 Performance Optimizations

- **Image optimization** with lazy loading
- **Code splitting** with dynamic imports
- **Bundle optimization** with Vite
- **Compression** middleware on server
- **Rate limiting** for API protection
- **Caching** headers for static assets

## 🔒 Security Features

- **Helmet.js** for security headers
- **CORS** configuration
- **Rate limiting** on all endpoints
- **Input validation** and sanitization
- **SQL injection** protection via Mongoose
- **XSS protection** with input escaping

## 🧪 Testing

### Frontend Testing
```bash
# Add testing dependencies
npm add -D @testing-library/react @testing-library/jest-dom vitest jsdom

# Run tests
npm run test
```

### API Testing
```bash
# Test API endpoints
curl http://localhost:5000/health
curl http://localhost:5000/api/projects
```

## 📄 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── hooks/
│   ├── types/
│   ├── data/
│   └── utils/
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── scripts/
└── public/
```

## 🐛 Troubleshooting

### Common Issues

**Frontend not connecting to backend:**
- Check CORS configuration
- Verify API URLs in frontend
- Ensure backend server is running

**Database connection failed:**
- Verify MongoDB URI in .env
- Check MongoDB service status
- Ensure network connectivity

**Animations not working:**
- Check Framer Motion installation
- Verify browser compatibility
- Clear browser cache

**Build errors:**
- Delete node_modules and reinstall
- Check TypeScript errors
- Verify all dependencies are installed

### Performance Issues

**Slow loading:**
- Optimize images and use WebP format
- Enable gzip compression
- Implement lazy loading

**High memory usage:**
- Check for memory leaks in animations
- Optimize large components
- Use React.memo for expensive renders

## 📞 Support

For issues or questions:
- Create an issue in the GitHub repository
- Check the troubleshooting section
- Contact: john.doe@email.com

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

---

Built with ❤️ using the MERN stack and modern web technologies.