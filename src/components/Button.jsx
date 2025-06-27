import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, href, className = '', ...props }) => {
  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)' }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.a>
  );
};

export default Button;
