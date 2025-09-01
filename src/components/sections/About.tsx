import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import AnimatedButton from '../ui/AnimatedButton';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            
            <GlassmorphicCard className="p-8">
              <motion.p 
                className="text-white/80 text-lg leading-relaxed mb-6"
                variants={itemVariants}
              >
                I'm a full-stack developer who enjoys building modern and user-friendly web applications. I mainly work with the MERN stack and love turning ideas into real projects through clean code and simple design.
              </motion.p>
              
              <motion.p 
                className="text-white/80 text-lg leading-relaxed mb-6"
                variants={itemVariants}
              >
               I’m always curious about learning new technologies and improving my skills. Outside of coding, I enjoy exploring creative ideas and finding better ways to solve problems.
              </motion.p>

              <motion.div className="flex flex-wrap gap-4">
                <AnimatedButton onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  View Projects
                </AnimatedButton>
              </motion.div>
            </GlassmorphicCard>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <motion.img
                src="/dist/assets/profile2.png"
                alt="Profile"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white/20 shadow-2xl"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;