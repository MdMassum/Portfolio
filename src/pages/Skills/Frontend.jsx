import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiSocketdotio
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 text-2xl" /> },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black text-2xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: 'Socket.io', icon: <SiSocketdotio className="text-gray-700 text-2xl" /> },
];

function Frontend() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className='flex flex-col items-center p-6 shadow-lg rounded-lg min-w-[345px] mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-gradient-to-b from-gray-300 via-gray-50 to-gray-400'
    >
      <h3 className='text-2xl font-semibold mb-4 text-center'>Frontend</h3>
      <div className='grid grid-cols-3 gap-5'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            {skill.icon}
            <p className="text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Frontend;
