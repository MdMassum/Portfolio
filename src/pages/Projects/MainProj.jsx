import React from 'react';
import { motion } from 'framer-motion';
import HomeConnect from '../../assets/Homeconnect.png';
import portfolio from '../../assets/portfolio.png';
import chatApp from '../../assets/chatApp.png';
import Celestium from '../../assets/Celestium.png';
import codeTogether from '../../assets/codeTogether.png';
import Axis_Exports from '../../assets/axis_exports.png';
import ecom from '../../assets/ecom.png';
import HostIt from '../../assets/HostIt.png';
import Card from './Card.jsx';

function MainProj() {
    const projects = [
        {
            image: codeTogether,
            git: "https://github.com/MdMassum/CodeTogether",
            live: "https://code-together-wine.vercel.app/",
            name: "CodeTogether",
            description: "A virtual codespace for multiple coders to code simultaneously. Simultaneous work environment."
        },
        {
            image: HostIt,
            git: "https://github.com/MdMassum/HostIt",
            live: "https://vercel-clone-lake.vercel.app/",
            name: "HostIt",
            description: "Host your website on my server because it is secured, it is fast and more reliable than yours i guess"
        },
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
            live: "https://masum-estate.vercel.app/",
            name: "HomeConnect",
            description: "Developed a fullstack RealEstate Management app using MERN stack where users can create, edit or delete their listings and can contact landlords directly for property listings."
        },
        {
            image: portfolio,
            git: "https://github.com/MdMassum/Portfolio",
            live: "https://connectmmassum.vercel.app/",
            name: "Portfolio",
            description: "My Personal Portfolio Website built using react, styled using tailwind css, animated using framer-motion and email functionality using email js."
        },
        {
            image: Celestium,
            git: "https://github.com/MdMassum/Celestium",
            live: "https://masumcelestium.vercel.app/",
            name: "Celstium",
            description: "Its an ui of astrologer app that i made from scratch based on figma design"
        },
        {
            image: Axis_Exports,
            git: "https://github.com/MdMassum/axis-exports",
            live: "https://axis-exports.vercel.app/",
            name: "Axis Exports",
            description: "Herbal Product Selling app made for client with admin dashboard"
        },
        {
            image: ecom,
            git: "https://github.com/MdMassum/ecom",
            live: "https://vocal-for-local.vercel.app/",
            name: "Vocal For Local",
            description: "Ecommerce app made for locals with seller and admin dashboard"
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

export default MainProj;
