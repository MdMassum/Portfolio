import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
    const nav = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
    ];
    
    const logo = [
        {
            href: "https://www.instagram.com/m.massum_12/",
            item: <FaInstagram />
        },
        {
            href: "https://www.linkedin.com/in/md-emamudin-42576421b/",
            item: <FaLinkedin />
        },
        {
            href: "https://github.com/MdMassum",
            item: <FaGithub />
        },
        {
            href: "https://leetcode.com/u/mdemamudin726/",
            item: <SiLeetcode />
        },
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center items-center px-7 py-6 md:px-20 md:py-8 space-y-6 md:space-y-8 shadow-[0_1px_6px_rgba(0,0,0,0.2)] dark:bg-slate-900"
        >
            {/* Footer Brand */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold text-gray-600 dark:text-white">M. Emamudin</h2>
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <ul className="flex gap-6">
                    {nav.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={item.href}
                                className="text-gray-500 hover:text-black transition duration-300 ease-in-out font-medium dark:text-gray-300 hover:dark:text-white"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>

            {/* Social Media Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <ul className="flex gap-6 text-2xl">
                    {logo.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-black transition duration-300 ease-in-out dark:text-gray-300 hover:dark:text-white"
                            >
                                {item.item}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Footer Copyright */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-gray-500 text-sm dark:text-white"
            >
                © M. Emamudin. All Rights Reserved
            </motion.span>
        </motion.footer>
    );
}

export default Footer;
