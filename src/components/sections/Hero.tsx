import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import AnimatedButton from '../ui/AnimatedButton';

const Hero: React.FC = () => {
  const typedText = useTypingEffect(['Full-Stack Developer', 'React Specialist', 'MERN Stack Expert'], 180, 120, 3500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.9
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Dhinesh
            </span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl text-white/90 font-light">
            I'm a{' '}
            <span className="text-purple-400 font-semibold min-h-[1.2em] inline-block transition-all duration-200 ease-in-out">
              {typedText}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0] }}
                transition={{ 
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                  repeatDelay: 0.2
                }}
                className="text-purple-400"
              >
                |
              </motion.span>
            </span>
          </h2>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft exceptional digital experiences with modern technologies. 
          Passionate about clean code, beautiful design, and solving complex problems.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <AnimatedButton onClick={scrollToAbout}>
            View My Work
          </AnimatedButton>
          
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          {[
            { icon: Github, href: 'https://github.com/Dhinesh71' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/dhinesh-v-690289292/' }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-purple-400 transition-colors cursor-hover"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-white/60 hover:text-purple-400 transition-colors cursor-hover"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;