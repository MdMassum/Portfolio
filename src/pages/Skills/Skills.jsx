import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Frontend from './Frontend';
import Backend from './Backend';

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      id='skills' 
      className='flex flex-col items-center justify-around md:justify-between md:my-12 p-7 md:px-44 gap-2 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black overflow-hidden'
    >
      {/* Heading */}
      <motion.div
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={{
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative inline-block text-center md:text-left"
>
  <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-gray-600 via-gray-300 to-gray-600 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
    Skills
  </h2>

  <motion.span
    initial={{ width: 0 }}
    animate={inView ? { width: "60%" } : { width: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="block h-1 bg-red-500 mt-2 md:mx-0"
  />
</motion.div>


      {/* Subheading */}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className='text-gray-500 text-sm md:text-lg text-center md:text-left dark:text-gray-300'
      >
        My Technical Skills
      </motion.span>

      {/* Frontend and Backend Components */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className='flex items-center gap-4 md:gap-32 mt-6 flex-wrap'
      >
        <Frontend />
        <Backend />
      </motion.div>
    </motion.section>
  );
}

export default Skills;