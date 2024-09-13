import React from 'react';

function Experience() {
  return (
    <div className="grid grid-cols-[1fr_max-content_1fr]">
      {/* First item - Left Side */}
      <div className="flex justify-end border-r-2 border-gray-300 pr-4">
        {/* Data */}
        <div className="text-right">
          <h4 className="font-semibold">FirstRicoz Private Limited</h4>
          <p className="text-gray-600 dark:text-gray-300">FullStack Intern</p>
          <p className="text-gray-400 text-sm">sep 2024 - Present</p>
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
      <div className="flex justify-start border-l-2 border-gray-300 pl-4 -mx-0.5">
        {/* Data */}
        <div>
          <h4 className="font-semibold">Nil</h4>
          <p className="text-gray-600 dark:text-gray-300">dfkljdk</p>
          <p className="text-gray-400 text-sm">flkdjf</p>
        </div>
      </div>

    </div>
  );
}

export default Experience;
