import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaNodeJs, FaDocker, FaAws,
} from 'react-icons/fa';
import {
  SiExpress, SiNestjs, SiRedis, SiApachekafka,
  SiMongodb, SiMysql,
} from 'react-icons/si';

const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-2xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-2xl" /> },
  { name: 'Nest.js', icon: <SiNestjs className="text-red-500 text-2xl" /> },
  { name: 'Redis', icon: <SiRedis className="text-red-600 text-2xl" /> },
  { name: 'Kafka', icon: <SiApachekafka className="text-black text-2xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-2xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-2xl" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-500 text-2xl" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-400 text-2xl" /> },
];

function Backend() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className='flex flex-col items-center p-6 shadow-lg rounded-lg min-w-[345px] mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-gradient-to-b from-gray-300 via-gray-50 to-gray-400'
    >
      <h3 className='text-2xl font-semibold mb-4 text-center'>Backend / DevOps</h3>
      <div className='grid grid-cols-3 gap-5'>
        {backendSkills.map((skill, index) => (
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

export default Backend;
