import React from 'react'
import HomeConnect from '../../assets/Homeconnect.png'
import NewsBhandar from '../../assets/newsbhandar.png'
import portfolio from '../../assets/portfolio.png'
import chatApp from '../../assets/chatApp.png'

import Card from './Card.jsx';

function MainProj() {
    const projects = [
        {
            image: chatApp,
            git: "https://github.com/MdMassum/chat-box",
            live: "https://massumchatapp.vercel.app/",
            name: "ChatApp",
            description: "Built a Chat app which supports features like sending & receiving messages, creating group chats in RealTime using Pusher & Next.js"
        },
        {
            image: HomeConnect,
            git: "https://github.com/MdMassum/Estate_Project",
            live: "https://massum-estate.onrender.com/",
            name: "HomeConnect",
            description: "Developed a fullstack RealEstate Management app using MERN stack where users can create, edit or delete their listings and can contact landlords directly for property listings."
        },
        
        {
            image: NewsBhandar,
            git: "https://github.com/MdMassum/NewsBhandar",
            live: "https://news-bhandar.vercel.app/",
            name: "NewsBhandar",
            description: "NewsBhandar is a real-time news aggregator that provides users with updated news across various categories. Leveraging APIs for real-time data fetching, the platform ensures users stay informed with the latest news as it unfolds."
        },
        {
            image: portfolio,
            git: "https://github.com/MdMassum/Portfolio",
            live: "https://connectmmassum.vercel.app/",
            name: "Portfolio",
            description: "My Personal Portfolio Website"
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

export default MainProj;
