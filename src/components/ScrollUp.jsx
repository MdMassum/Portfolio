import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollUp() {
  return (
    <motion.a
      href='#home'
      className='fixed bottom-8 right-6 md:right-20 z-50 cursor-pointer'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaArrowAltCircleUp className='animate-bounce w-12 h-12 text-gray-600 hover:text-black transition-transform transform hover:scale-110 dark:text-gray-300 hover:dark:text-white' />
    </motion.a>
  );
}

export default ScrollUp;