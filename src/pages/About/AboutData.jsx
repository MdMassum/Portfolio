import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SlBadge } from "react-icons/sl";
import { RiFundsBoxLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import resume from '../../assets/Resume_Emam.pdf';

function AboutData() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
      <motion.div 
        ref={ref}
        className='flex flex-col gap-6 overflow-hidden'
      >
        {/* Experience and Completed Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-row items-center gap-6 md:gap-10'
        >
          <div className='flex flex-col shadow-md justify-center items-center p-4 ml-10 md:ml-0 rounded-lg bg-white'>
            <SlBadge className='text-3xl md:text-4xl text-black'/>
            <span className='text-lg md:text-xl font-semibold dark:text-black'>Experience</span>
            <span className='text-gray-500'>Fresher</span>
          </div>
          <div className='flex flex-col shadow-md justify-center items-center p-4 rounded-lg bg-white'>
            <RiFundsBoxLine className='text-3xl md:text-4xl text-black'/>
            <span className='text-lg md:text-xl font-semibold dark:text-black'>Completed</span>
            <span className='text-gray-500'>10+ Projects</span>
          </div>
        </motion.div>
  
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-gray-600 line-clamp-4 text-sm md:text-md leading-relaxed dark:text-gray-300'
        >
          <span className='hidden md:flex'>Hi, I'm Mohammad Emamudin, a final-year BTech CSE student at Mittal Institute of Technology. </span>
          I've developed several projects using the MERN stack and solved over 350 problems on LeetCode. Aspiring to become a software developer, I'm passionate about building innovative web applications and continuously honing my skills.
        </motion.p>
  
        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex justify-center md:justify-start'
        >
          <a href={resume} download>
            <button className='flex items-center gap-2 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 hover:text-red-600 dark:bg-white dark:text-black dark:hover:text-red-600'>
              <span>Download CV</span>
              <IoDocumentTextOutline className='text-xl'/>
            </button>
          </a>
        </motion.div>
      </motion.div>
    );
  }

export default AboutData;