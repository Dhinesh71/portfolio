import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  return (
    <motion.div
      className={`
        bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
        shadow-xl hover:shadow-2xl transition-all duration-300
        ${hover ? 'hover:bg-white/15 hover:border-white/30' : ''}
        ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassmorphicCard;