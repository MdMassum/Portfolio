import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'

function Skills() {
  return (
    <div id='skills' className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-2'>
        <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Skills</h2>
        <span className='text-gray-500 text-sm md:text-lg text-center md:text-left'>My Technical Skills</span>
        <div className='flex items-center gap-4 md:gap-32 mt-6 flex-wrap'>
            <Frontend/>
            <Backend/>
        </div>

    </div>
  )
}

export default Skills