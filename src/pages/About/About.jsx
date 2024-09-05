import React from 'react'
import profile from '../../assets/profile.jpg'
import AboutData from './AboutData.jsx'

function About() {
    return (
      <div id='about' className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-6'>
        {/* Section Heading */}
        <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>About Me</h2>
        <span className='text-gray-500 text-sm md:text-lg text-center md:text-left -mt-3'>My Introduction</span>
  
        {/* Profile Image and About Data */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 w-full'>
          <img 
            src={profile} 
            alt="Profile" 
            className='w-40 md:w-52  h-40 md:h-52 rounded-full object-cover border-4 border-gray-300 shadow-xl' 
          />
          <div className='w-full md:w-2/3'>
            <AboutData />
          </div>
        </div>
      </div>
    );
  }
  

export default About