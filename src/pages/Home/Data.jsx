import React, { useEffect, useState } from 'react';
import { CiLocationArrow1 } from "react-icons/ci";
import { motion } from 'framer-motion';
import hand from '../../assets/hand.svg';

function Data() {
  const texts = ["Web Developer", "Coder..."];
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);  // Index of the current string
  const [charIndex, setCharIndex] = useState(0); // Index of the current character

  useEffect(() => {
    // Clear text after the entire word is displayed
    if (charIndex === texts[index].length) {
      const timeout = setTimeout(() => {
        setCharIndex(0);  // Reset character index for the next word
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);  // Move to next word
        setDisplayedText(""); // Clear the displayed text for the next word
      }, 1000); // Pause before switching words
      return () => clearTimeout(timeout);
    }

    // Append one character at a time
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + texts[index][charIndex]);
      setCharIndex(charIndex + 1);
    }, 100); // Speed of character animation

    return () => clearInterval(interval); // Cleanup interval
  }, [charIndex, index]);

  return (
    <div className='flex flex-col gap-4 text-center md:text-left mt-4 dark:bg-transparent overflow-hidden'>
      {/* Name Heading */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='flex gap-1 items-center ml-16 md:ml-0'
      >
        <h1 className='text-3xl md:text-6xl font-bold text-gray-800 dark:text-white'>
          Md Emamudin
        </h1>
        <motion.img
          src={hand}
          className='md:w-12 md:h-12'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.div>

      {/* Job Title */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='text-lg md:text-2xl font-semibold text-gray-600 dark:text-white'
      >
        <span className='hidden md:inline'>___</span>_____{displayedText}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className='text-sm md:text-lg text-gray-500 max-w-md mx-auto md:mx-0 dark:text-gray-300'
      >
        "Welcome, to my portfolio. Do explore my projects and journey towards becoming a skilled software developer!"
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className='mt-4 mx-auto md:mx-0'
      >
        <a href="#contact">
          <button className='flex bg-black text-white p-3 rounded-xl hover:text-red-500 dark:bg-transparent dark:text-white border border-white dark:hover:text-red-600'>
            Say Hello <CiLocationArrow1 className='bg-transparent mx-1' />
          </button>
        </a>
      </motion.div>
    </div>
  );
}

export default Data;