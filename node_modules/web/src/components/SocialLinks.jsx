import React from 'react';
import { motion } from 'framer-motion';
import { Music2, Instagram, Facebook, Github } from 'lucide-react';

const SocialLinks = () => {
  const socials = [
    { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-500', url: 'https://www.instagram.com/jo7_walt?igsh=MWE1NWU1eGE1czNkMg%3D%3D&utm_source=qr' },
    { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600', url: 'https://www.facebook.com/share/1CFqd4xPy5/?mibextid=wwXIfr' },
    { icon: Music2, label: 'TikTok', color: 'hover:bg-black', url: 'https://www.tiktok.com/@gehad135' },
    { icon: Github, label: 'GitHub', color: 'hover:bg-gray-800', url: 'https://github.com/gehad-eng' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="flex justify-center gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-4 bg-white/20 backdrop-blur-md rounded-full text-white ${social.color} shadow-lg`}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <social.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;