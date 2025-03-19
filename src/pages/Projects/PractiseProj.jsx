import React from 'react';
import { motion } from 'framer-motion';
import amazon from '../../assets/amazon.png';
import weather from '../../assets/weather.png';
import tictactoe from '../../assets/tictactoe.png';
import photo1 from '../../assets/work1.jpg';
import NewsBhandar from '../../assets/newsbhandar.png';
import Card from './Card.jsx';

function PractiseProj() {
    const projects = [
        {
            image: NewsBhandar,
            git: "https://github.com/MdMassum/NewsBhandar",
            live: "https://news-bhandar.vercel.app/",
            name: "NewsBhandar",
            description: "NewsBhandar is a real-time news aggregator that provides users with updated news across various categories. Leveraging APIs for real-time data fetching, the platform ensures users stay informed with the latest news as it unfolds."
        },
        {
            image: weather,
            git: "https://github.com/MdMassum/Weather-Proj",
            live: "https://mdmassum.github.io/Weather-Proj/",
            name: "Real-Time Weather Viewer",
            description: "This project provides users with real-time weather updates for any city or place around the world. Utilizes APIs to fetch current weather data from reliable sources."
        },
        {
            image: tictactoe,
            git: "https://github.com/MdMassum/Tic-Tac-Toe-Game",
            live: "https://mdmassum.github.io/Tic-Tac-Toe-Game/",
            name: "Tic Tac Toe",
            description: "Developed a classic Tic Tac Toe game using Html, Css & Javascript. Implemented interactive gameplay allowing two players to compete against each other, with a user-friendly interface and intuitive design."
        },
        {
            image: amazon,
            git: "https://github.com/Amazon-clone",
            live: "https://mdmassum.github.io/Amazon-clone/",
            name: "Amazon-Clone",
            description: "Frontend Clone of Amazon Website Using Html & CSS"
        },
        {
            image: photo1,
            git: "https://github.com/MdMassum/inotebook",
            live: "https://github.com/MdMassum/inotebook",
            name: "InoteBook",
            description: "Developed a full-stack web application for authenticated note-taking with CRUD operations using MERN Stack (MongoDB, Express, React, Node.js)."
        },
    ];

    return (
        <div className='container mx-auto p-5'>
            <motion.div 
                className='flex flex-wrap justify-center gap-6'
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default PractiseProj;
