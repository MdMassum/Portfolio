import React, { useState } from 'react';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const qualifications = [
  {
    type: 'Education',
    items: [
      { title: 'Btech Cse', name: 'Mittal Institute Of Technology', period: '2021 - Present' },
      { title: 'Class XII', name: 'Kendriya Vidyalaya', period: '2020 - 2021' },
      { title: 'Class X', name: 'St.Thomas Residential', period: '2018 - 2019' },
    ],
  },
  {
    type: 'Experience',
    items: [
      { title: 'UX Designer', name: 'Apple Inc - Spain', period: '2020 - 2021' },
      { title: 'Web Designer', name: 'Figma - Spain', period: '2018 - 2020' },
    ],
  },
];

function Qualification() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <div id='skills' className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-2'>
      <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Qualification</h2>
      <span className='text-gray-500 text-sm md:text-lg text-center md:text-left'>My Personal Journey</span>

      <div className='flex justify-center gap-6 mb-10'>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Education' ? 'text-black font-semibold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Education')}
        >
          <FaGraduationCap />
          Education
        </button>
        <button
          className={`flex items-center gap-2 ${activeTab === 'Experience' ? 'text-black font-semibold' : 'text-gray-500'}`}
          onClick={() => setActiveTab('Experience')}
        >
          <FaBriefcase />
          Experience
        </button>
      </div>

      <div className="relative">
        <div className="border-l-2 border-gray-300 ml-4 relative">
          {qualifications
            .find(q => q.type === activeTab)
            .items.map((item, idx) => (
              <div
                key={idx}
                className={`mb-10 relative ${idx % 2 === 0 ? 'ml-8' : 'ml-8 md:ml-0 md:mr-8'} ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}
                style={{
                  transform: idx % 2 === 0 ? 'translateX(0)' : 'translateX(-100%)',
                }}
              >
                <div
                  className="absolute w-4 h-4 bg-white border-2 border-gray-300 rounded-full"
                  style={{
                    left: idx % 2 === 0 ? '-2rem' : 'auto',
                    right: idx % 2 !== 0 ? '-2rem' : 'auto',
                  }}
                ></div>
                <h4 className='font-semibold'>{item.title}</h4>
                <p className='text-gray-600'>{item.name}</p>
                <p className='text-gray-400 text-sm'>{item.period}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Qualification;
