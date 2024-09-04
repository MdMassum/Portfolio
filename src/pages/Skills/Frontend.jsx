import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Frontend() {
  return (
    <div className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto transform transition-transform duration-300 hover:scale-105'>
      <h3 className='text-2xl font-semibold mb-6 text-center'>Frontend</h3>
      <div className='flex flex-col'>
        
        {/* First Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>HTML</p>
            </div>
            <span className='text-gray-500 text-xs'>Advanced</span>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>React</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>CSS</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>Tailwind CSS</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>JavaScript</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>Bootstrap</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Frontend;
