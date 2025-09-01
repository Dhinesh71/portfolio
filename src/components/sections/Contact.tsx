import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import GlassmorphicCard from '../ui/GlassmorphicCard';

const Contact: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Dhinesh71', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhinesh-v-690289292/', label: 'LinkedIn' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'dhineshjk17@gmail.com', href: 'mailto:dhineshjk17@gmail.com' },
    { icon: Phone, text: '+91 9025873422', href: 'tel:+919025873422' },
    { icon: MapPin, text: 'Erode, TamilNadu', href: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 relative min-h-screen flex items-center" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-2xl mx-auto space-y-6"
        >
          {/* Contact Info Card */}
          <motion.div variants={itemVariants}>
            <GlassmorphicCard className="p-8 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-4 bg-purple-600/20 rounded-full">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <span className="text-lg">{info.text}</span>
                  </motion.a>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>

          {/* Follow Me Card */}
          <motion.div variants={itemVariants}>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Follow Me</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-purple-600/20 rounded-full text-white hover:bg-purple-500/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;