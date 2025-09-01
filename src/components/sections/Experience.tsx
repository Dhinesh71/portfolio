import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import { experiences } from '../../data/portfolio';

const Experience: React.FC = () => {
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

  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience & Education
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={index % 2 === 0 ? itemVariants : rightItemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8 space-y-6 lg:space-y-0`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <GlassmorphicCard className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        {exp.type === 'work' ? (
                          <Briefcase size={20} className="text-white" />
                        ) : (
                          <GraduationCap size={20} className="text-white" />
                        )}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-white/60 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>

                    <p className="text-white/80 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-start space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/70 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </GlassmorphicCard>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="hidden lg:flex w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg relative z-10"
                  whileHover={{ scale: 1.3 }}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-75" />
                </motion.div>

                {/* Spacer for alignment */}
                <div className="flex-1 lg:max-w-md hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;