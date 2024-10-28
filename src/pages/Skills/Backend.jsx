import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Backend() {
  return (
    <div className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
      <h3 className='text-2xl font-semibold mb-6 text-center'>Backend</h3>
      <div className='flex flex-col'>
        
        {/* First Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>Node Js</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>MongoDb</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>Express</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>MySQL</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>Typescript</p>
            </div>
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>

          <div className="flex flex-col items-center text-center p-2">
            <div className='flex gap-2 items-center justify-center'>
              <IoMdCheckmarkCircleOutline className='text-md'/>
              <p className='text-lg font-medium'>Docker</p>
            </div>
            <span className='text-gray-500 text-xs'>Begineer</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Backend;
