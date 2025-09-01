import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import CustomCursor from '../ui/CustomCursor';
import ParticleBackground from '../ui/ParticleBackground';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const MainLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background-primary via-purple-900 to-background-secondary overflow-x-hidden">
      <ParticleBackground />
      <CustomCursor />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </motion.div>

      {/* Additional Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default MainLayout;