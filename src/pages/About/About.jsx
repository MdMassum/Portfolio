import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profile from '../../assets/profile.jpg';
import AboutData from './AboutData.jsx';

function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, x: -50 }} 
        animate={inView ? { opacity: 1, x: 0 } : {}} 
        transition={{ duration: 1 }}
        id='about' 
        className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-6 dark:bg-slate-800 dark:text-white overflow-hidden'
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-3xl md:text-5xl font-bold text-center md:text-left'
        >
          About Me
        </motion.h2>

        {/* Subheading */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-gray-500 text-sm md:text-lg text-center md:text-left -mt-3 dark:text-gray-300'
        >
          My Introduction
        </motion.span>
  
        {/* Content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 w-full'>
          {/* Profile Image */}
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            src={profile} 
            alt="Profile" 
            className='w-40 md:w-52 h-40 md:h-52 rounded-full object-cover border-4 border-gray-300 shadow-xl' 
          />

          {/* AboutData Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className='w-full md:w-2/3'
          >
            <AboutData />
          </motion.div>
        </div>
      </motion.div>
    );
  }

export default About;