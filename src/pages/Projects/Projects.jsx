import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MainProj from './MainProj';
import PractiseProj from './PractiseProj';

function Projects() {
    const [activeTab, setActiveTab] = useState('Main');
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            id='portfolio' 
            className='flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-2 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black dark:text-white overflow-hidden'
        >
            <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>My Projects</h2>
            <span className='text-gray-500 text-sm md:text-lg text-center md:text-left mt-2 dark:text-gray-300'>
                Most Recent Work
            </span>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='flex justify-center gap-6 mb-1 mt-10 text-xl'
            >
                <button
                    className={`flex items-center gap-2 ${activeTab === 'Main' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-300'}`}
                    onClick={() => setActiveTab('Main')}
                >
                    Main Projects
                </button>
                <button
                    className={`flex items-center gap-2 ${activeTab === 'Practise' ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-300'}`}
                    onClick={() => setActiveTab('Practise')}
                >
                    Practise Projects
                </button>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
            >
                {activeTab === "Main" ? <MainProj /> : <PractiseProj />}
            </motion.div>
        </motion.div>
    );
}

export default Projects;
