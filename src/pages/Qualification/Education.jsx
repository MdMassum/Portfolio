import React from 'react';

function Education() {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr]">
      {/* First item - Left Side */}
      <div className="flex justify-end border-r-2 border-gray-300 pr-4 pb-8 ">
        {/* Data */}
        <div className="text-right -mt-2">
          <h4 className="font-semibold">Btech Cse</h4>
          <p className="text-gray-600 dark:text-gray-200">Mittal Institute Of Technology, Bhopal</p>
          <p className="text-gray-400 text-sm">2021 - 2025</p>
        </div>
      </div>
      
      {/* Timeline Circle */}
      <div className="flex -mx-1.5 ">
        <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
      </div>
      
      {/* Spacer for right side (empty column) */}
      <div></div>

      {/* Spacer for left side (empty column) */}
      <div></div>

      {/* Timeline Circle */}
      <div className="flex -mx-1.5 z-50 my-2">
        <div className="w-3 h-3 bg-black dark:bg-white rounded-full"></div>
      </div>

      {/* Second item - Right Side */}
      <div className="flex justify-start border-l-2 border-gray-300 pl-4 pb-8 -mx-0.5">
        {/* Data */}
        <div>
          <h4 className="font-semibold">Class XII</h4>
          <p className="text-gray-600 dark:text-gray-300">Kendriya Vidyalaya No 1, Itanagar</p>
          <p className="text-gray-400 text-sm">2020 - 2021</p>
        </div>
      </div>

      {/* Third item - Left Side */}
      <div className="flex justify-end border-r-2 border-gray-300 pr-4">
        {/* Data */}
        <div className="text-right">
          <h4 className="font-semibold">Class X</h4>
          <p className="text-gray-600 dark:text-gray-300">St.Thomas Residential</p>
          <p className="text-gray-400 text-sm">2018 - 2019</p>
        </div>
      </div>
      
      {/* Timeline Circle */}
      <div className="flex -mx-1.5">
        <div className="w-3 h-3 bg-black dark:bg-white rounded-full my-2"></div>
      </div>

      {/* Spacer for right side (empty column) */}
      <div></div>
    </div>
  );
}

export default Education;
