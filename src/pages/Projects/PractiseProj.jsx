import React from 'react'
import amazon from '../../assets/amazon.png'
import weather from '../../assets/weather.png'
import tictactoe from '../../assets/tictactoe.png'
import photo1 from '../../assets/work1.jpg'
import Card from './Card.jsx';

function PractiseProj() {
    const projects = [
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
            <div className='flex flex-wrap justify-center gap-6'>
                {projects.map((project, idx) => (
                    <Card key={idx} project={project} />
                ))}
            </div>
        </div>
    )
}

export default PractiseProj;
