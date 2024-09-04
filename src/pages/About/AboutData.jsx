import React from 'react'
import { SlBadge } from "react-icons/sl";
import { RiFundsBoxLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import resume from '../../assets/Resume_Emam.pdf'



function AboutData() {
    return (
      <div className='flex flex-col gap-6'>
        {/* Experience and Completed Projects */}
        <div className='flex flex-row items-center gap-6 md:gap-10'>
          <div className='flex flex-col shadow-md justify-center items-center p-4 rounded-lg bg-white'>
            <SlBadge className='text-3xl md:text-4xl text-black'/>
            <span className='text-lg md:text-xl font-semibold'>Experience</span>
            <span className='text-gray-500'>Fresher</span>
          </div>
          <div className='flex flex-col shadow-md justify-center items-center p-4 rounded-lg bg-white'>
            <RiFundsBoxLine className='text-3xl md:text-4xl text-black'/>
            <span className='text-lg md:text-xl font-semibold'>Completed</span>
            <span className='text-gray-500'>10+ Projects</span>
          </div>
        </div>
  
        {/* Description */}
        <p className='text-gray-600 text-sm md:text-lg leading-relaxed'>
          I'm a Frontend developer, I create web pages with UI/UX user interface. I have experience and many clients are happy with the projects carried out.
        </p>
  
        {/* Download CV Button */}
        <div className='flex justify-center md:justify-start'>
          <a href={resume} download >
            <button className='flex items-center gap-2 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 hover:text-red-600'>
            <span>Download CV</span>
            <IoDocumentTextOutline className='text-xl'/>
          </button>
          </a>
        </div>
      </div>
    );
  }

export default AboutData