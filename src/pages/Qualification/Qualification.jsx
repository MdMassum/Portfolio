import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Education from './Education';
import Experience from './Experience';

function Qualification() {
  const [activeTab, setActiveTab] = useState('Education');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      id='skills' 
      className='flex flex-col items-center justify-around md:justify-between p-7 md:py-16 md:px-44 gap-2 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black dark:text-white pb-16 overflow-hidden'
    >
      <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Qualification</h2>
      <span className='text-gray-500 text-sm md:text-lg text-center md:text-left dark:text-gray-300'>My Personal Journey</span>

      <div className='flex justify-center gap-6 mb-6 mt-10 text-xl'>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Education' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-300'}`}
          onClick={() => setActiveTab('Education')}
        >
          <FaGraduationCap />
          Education
        </button>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Experience' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-300'}`}
          onClick={() => setActiveTab('Experience')}
        >
          <FaBriefcase />
          Experience
        </button>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {activeTab === "Education" ? <Education/> : <Experience/>}
      </motion.div>
    </motion.div>
  );
}

export default Qualification;
