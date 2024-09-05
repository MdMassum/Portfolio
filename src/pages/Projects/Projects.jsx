import React, { useState } from 'react'
import MainProj from './MainProj';
import PractiseProj from './PractiseProj';


function Projects() {
    const [activeTab, setActiveTab] = useState('Main');
  return (
    <div id='portfolio' className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-2'>
        <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>My Projects</h2>
        <span className='text-gray-500 text-sm md:text-lg text-center md:text-left mt-2'>Most Recent Work</span>
        
        <div className='flex justify-center gap-6 mb-1 mt-10'>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Main' ? 'text-black font-semibold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Main')}
        >
          {/* <FaGraduationCap /> */}
          Main Projects
        </button>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Practise' ? 'text-black font-semibold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Practise')}
        >
          {/* <FaBriefcase /> */}
          Practise Projects
        </button>
      </div>
      {
        activeTab === "Main" ? <MainProj/> : <PractiseProj/>
      }

    </div>
  )
}

export default Projects