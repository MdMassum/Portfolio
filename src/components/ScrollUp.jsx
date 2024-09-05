import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

function ScrollUp() {
  return (
    <a href='#home' className='fixed bottom-6 right-6 z-50 cursor-pointer'>
      <FaArrowAltCircleUp className='w-10 h-10 text-gray-600 hover:text-black transition-transform transform hover:scale-110' />
    </a>
  );
}

export default ScrollUp;
