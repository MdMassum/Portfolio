import React, { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { motion } from 'framer-motion';
import { IoHomeOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { LuFileSignature } from "react-icons/lu";
import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Header({ darkTheme, lightTheme, themeMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        if (themeMode === 'light') {
            darkTheme();
        } else {
            lightTheme();
        }
    }

    const nav = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
    ];

    const Mobnav = [
        { label: "About", href: "#about", logo: <IoHomeOutline className="w-6 h-6 text-gray-800 dark:text-white" /> },
        { label: "Skills", href: "#skills", logo: <FaGraduationCap className="w-6 h-6 text-gray-800 dark:text-white" /> },
        { label: "Portfolio", href: "#portfolio", logo: <LuFileSignature className="w-6 h-6 text-gray-800 dark:text-white" /> },
        { label: "Contact", href: "#contact", logo: <MdContactMail className="w-6 h-6 text-gray-800 dark:text-white" /> },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex justify-between items-center px-14 py-3 md:px-40 md:py-4 bg-white shadow-md sticky top-0 z-50 dark:bg-slate-900 dark:text-white'>
            <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-white'>M. Emamudin</h2>
            </div>
            {/* Desktop Navigation */}
            <div className='flex justify-center items-center gap-8'>
                <nav className='hidden md:flex gap-8'>
                    {nav.map((nav, idx) => (
                        <motion.a key={idx} href={nav.href} className='text-gray-600 hover:text-gray-900 font-medium transition-colors dark:text-gray-300 hover:dark:text-white'
                        whileHover={{ scale: 1.1, color: themeMode === 'light' ? '#000' : '#fff' }}
                        transition={{ duration: 0.2 }}>
                            {nav.label}
                        </motion.a>
                    ))}
                </nav>

                {/* Dark and Light Theme Toggle */}
                <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='hidden md:flex'>
                {
                    themeMode === 'light'
                        ? <MdSunny onClick={handleToggle} className='w-8 h-8 cursor-pointer' />
                        : <FaCloudMoon onClick={handleToggle} className='w-8 h-8 cursor-pointer' />
                }
                </motion.div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div 
                initial={{ y: '100%' }}
                animate={isOpen ? { y: 0 } : { y: '100%' }}
                transition={{ type: "spring", stiffness: 100 }}
                className='md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg py-4 dark:bg-slate-900'>
                    <ul className='grid grid-cols-2 gap-6 px-4'>
                        {Mobnav.map((nav, idx) => (
                            <li key={idx}>
                                <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className='flex flex-col items-center'>
                                    {nav.logo}
                                    <a href={nav.href} className='text-gray-600 hover:text-gray-900 font-medium mt-1 dark:text-gray-300 dark:hover:text-white'>
                                        {nav.label}
                                    </a>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='fixed bottom-24 right-6 z-50 bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-110'>
                    <IoGrid className='w-6 h-6 text-gray-600' />
                </button>
            </div>

            {/* Adjust theme icon position on mobile */}
            <div className='md:hidden'>
                {
                    themeMode === 'light'
                        ? <MdSunny onClick={handleToggle} className='fixed top-4 right-12 w-8 h-8 cursor-pointer' />
                        : <FaCloudMoon onClick={handleToggle} className='fixed top-4 right-12 w-8 h-8 cursor-pointer' />
                }
            </div>
        </motion.header>
    );
}

export default Header;
