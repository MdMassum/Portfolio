import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Backend() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg min-w-[345px] mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer'
    >
      <h3 className='text-2xl font-semibold mb-6 text-center'>Backend</h3>
      <div className='flex flex-col'>
        
        {/* First Row */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-2"
        >
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
        </motion.div>

        {/* Second Row */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 gap-2"
        >
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
        </motion.div>

        {/* Third Row */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 gap-2"
        >
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
            <span className='text-gray-500 text-xs'>Intermediate</span>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default Backend;