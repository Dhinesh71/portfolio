import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import GlassmorphicCard from '../ui/GlassmorphicCard';
import { skills } from '../../data/portfolio';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const categories = ['Frontend', 'Backend', 'Soft Skills'] as const;

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="space-y-4"
              >
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => {
                    const IconComponent = Icons[skill.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>;
                    
                    return (
                      <motion.div key={skill.name} variants={cardVariants}>
                        <GlassmorphicCard className="p-4 min-w-[260px] min-h-[70px] flex items-center">
                          <motion.div
                            className="flex items-center justify-between mb-3"
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center space-x-3">
                              {IconComponent && <IconComponent size={30} className="text-purple-400" />}
                              <span className="text-white font-medium">{skill.name}</span>
                            </div>
                          </motion.div>
                        </GlassmorphicCard>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;