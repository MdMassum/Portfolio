import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    
    const nav = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between items-center px-7 py-2 md:px-40 md:py-4 bg-white shadow-md sticky top-0 z-50 '>
            <div>
                <h2 className='text-2xl md:text-3xl font-bold text-gray-800'>M. Emamudin</h2>
            </div>
            <div>
                <ul className='hidden md:flex gap-6'>
                    {nav.map((nav, idx) => (
                        <li key={idx}>
                            <a href={nav.href} className='text-gray-600 hover:text-gray-900 font-medium'>
                                {nav.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-gray-600 focus:outline-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4'>
                    <ul className='flex flex-col items-center gap-4'>
                        {nav.map((nav, idx) => (
                            <li key={idx}>
                                <a href={nav.href} className='text-gray-600 hover:text-gray-900 font-medium'>
                                    {nav.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
