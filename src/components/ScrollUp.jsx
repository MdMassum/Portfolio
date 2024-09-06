import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollUp() {
  return (
    <a href='#home' className='fixed bottom-8 right-6 md:right-20 z-50 cursor-pointer'>
      <FaArrowAltCircleUp className='w-12 h-12 text-gray-600 hover:text-black transition-transform transform hover:scale-110 dark:text-gray-300 hover:dark:text-white' />
    </a>
  );
}

export default ScrollUp;
