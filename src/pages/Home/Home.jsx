import React from 'react';
import { motion } from 'framer-motion';
import Social from './Social';
import Data from './Data';
import profile from '../../assets/profile.jpg';
import { LuMouse } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";
import { CiLocationArrow1 } from 'react-icons/ci';

function Home() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        id='home'
        className='flex flex-col overflow-hidden'
      >

        <div className='flex flex-col md:flex-row items-center justify-around md:justify-between p-7 md:px-40 mt-16 md:mt-8 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black'>

          {/* Social Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className='mb-4 md:mb-0'
          >
            <Social />
          </motion.div>

          {/* Data Section */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className='mb-4 md:mb-0'
          >
            <Data />
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className='hidden md:block'
          >
            <img 
                src={profile} 
                alt="Profile" 
                className='w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-full object-cover border-4 border-gray-300 shadow-xl' 
            />
          </motion.div>
        </div>

        {/* Scroll Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className='hidden md:flex gap-4 mx-80 mb-20 dark:bg-transparent'
        >
          <a href="#about">
            <button className='flex justify-center items-center rounded-xl gap-1 px-5 py-2 hover:text-red-500 transition-all duration-300 ease-in-out dark:bg-transparent border border-white dark:text-white dark:hover:bg-white dark:hover:text-red-600'>
                <LuMouse />
                <p>Scroll</p>
                <FaArrowDown />
            </button>
          </a>
          <a href="#contact">
          <button className='flex bg-black text-white py-2 px-5 rounded-xl hover:text-red-500 dark:bg-transparent dark:text-white border border-white dark:hover:bg-white dark:hover:text-red-600'>
            Say Hello <CiLocationArrow1 className='bg-transparent mx-1' />
          </button>
        </a>
        </motion.div>
      </motion.section>
    );
  }

export default Home;