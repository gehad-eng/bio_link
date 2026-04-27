import React from 'react';
import { motion } from 'framer-motion';

const buttons = [
  { label: 'My Company', url: 'https://sabatc-new.vercel.app/' },
  { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/gehad-dahman-3703381b3' },
  { label: 'Schedule meeting with me', url: 'https://cal.com/gehad-dahman-nhyfqy' },
  { label: 'Email Me', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=gehaddahman@gmail.com' },
];

const ActionButtons = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="space-y-4 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {buttons.map((button) => (
        <motion.a
          key={button.label}
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[400px] py-4 px-6 bg-white/90 backdrop-blur-md rounded-2xl text-gray-800 font-semibold text-lg shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {button.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ActionButtons;