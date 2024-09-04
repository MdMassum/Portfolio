import React from 'react';
import { CiLocationArrow1 } from "react-icons/ci";

function Data() {
  return (
    <div className='flex flex-col gap-4 text-center md:text-left mt-4'>
      {/* Name Heading */}
      <h1 className='text-3xl md:text-6xl font-bold text-gray-800'>
        Md Emamudin
      </h1>
      
      {/* Job Title */}
      <h3 className='text-lg md:text-2xl font-semibold text-gray-600'>
        Web Developer
      </h3>
      
      {/* Description */}
      <p className='text-sm md:text-lg text-gray-500 max-w-md mx-auto md:mx-0'>
        I'm a creative designer based in New York, and I'm very passionate and dedicated to my work.
      </p>

      <div className='mt-4 mx-auto md:mx-0'>
      <a href="#contact"><button className='flex bg-black text-white p-3 rounded-xl  hover:text-red-500'>Say Hello  <CiLocationArrow1 className='bg-transparent mx-1' />
      </button></a>
      </div>
      
    </div>
  );
}

export default Data;
