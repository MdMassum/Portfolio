import React from 'react'
import Social from './Social'
import Data from './Data'
import profile from '../../assets/profile.jpg'
import { LuMouse } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa";

function Home() {
    return (

      <div id='home' className='flex flex-col'>

        <div className='flex flex-col md:flex-row items-center justify-around md:justify-between p-7 md:px-40 mt-8 dark:bg-slate-700 '>

        {/* Social Section */}
        <div className='mb-4 md:mb-0'>
          <Social />
        </div>
        
        {/* Data Section */}
        <div className='mb-4 md:mb-0'>
          <Data />
        </div>
  
        {/* Profile Image */}
        <div className='hidden md:block '>
        <img 
            src={profile} 
            alt="Profile" 
            className='w-32 md:w-40 lg:w-48 h-32 md:h-40 lg:h-48 rounded-full object-cover border-4 border-gray-300 shadow-xl' 
        />
        </div>
        </div>

        <div className='hidden md:block mx-80 mt-7 mb-20 dark:bg-slate-700'>
            <a href="#about"><button className='flex justify-center items-center rounded-xl gap-1 px-4 py-2 hover:text-red-500 transition-all duration-300 ease-in-out dark:bg-slate-700 dark:text-white dark:hover:text-red-500'>
                <LuMouse />
                <p>Scroll</p>
                <FaArrowDown />
            </button>
            </a>
        </div>
      </div>
    );
  }
  
  export default Home;
  
  