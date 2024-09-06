import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import profile from '../../assets/profile.jpg';

function Social() {
  return (
    <div className='flex justify-center items-center gap-20'>
      {/* Social Icons */}
      <div className='flex flex-col gap-3'>
        <a href="https://www.instagram.com/m.massum_12/" target='_blank' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white'>
          <FaInstagram className='h-8 w-8' />
        </a>
        <a href="https://www.linkedin.com/in/md-emamudin-42576421b/" target='_blank' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white'>
          <FaLinkedin className='h-8 w-8'/>
        </a>
        <a href="https://github.com/MdMassum" target='_blank' className='text-gray-600 hover:text-gray-900 dark:text-gray-300 hover:dark:text-white'>
          <FaGithub className='h-8 w-8'/>
        </a>
      </div>

      {/* Profile Image (Visible only on mobile) */}
      <div className='flex md:hidden'>
        <img 
          src={profile} 
          alt="Profile" 
          className='w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-lg' 
        />
      </div>
    </div>
  );
}

export default Social;
