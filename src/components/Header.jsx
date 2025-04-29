import React, { useEffect, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { LuFileSignature } from "react-icons/lu";
import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

function Header({ darkTheme, lightTheme, themeMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const nav = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const Mobnav = [
    {
      label: "About",
      href: "#about",
      logo: <IoHomeOutline className="w-6 h-6 text-gray-800 dark:text-white" />,
    },
    {
      label: "Skills",
      href: "#skills",
      logo: (
        <FaGraduationCap className="w-6 h-6 text-gray-800 dark:text-white" />
      ),
    },
    {
      label: "Portfolio",
      href: "#portfolio",
      logo: (
        <LuFileSignature className="w-6 h-6 text-gray-800 dark:text-white" />
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      logo: <MdContactMail className="w-6 h-6 text-gray-800 dark:text-white" />,
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // 60% of section must be visible
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center px-14 py-3 md:px-40 md:py-4 bg-white shadow-md sticky top-0 z-40 dark:bg-transparent dark:backdrop-blur-md dark:text-white dark:border-b border-gray-500"
    >
      <div className="flex flex-col items-start gap-1 md:gap-2 overflow-hidden">
        
        <motion.h2
          className='text-2xl md:text-3xl font-bold animate-gradient-text'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          M. Emamudin
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-red-500 rounded"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="flex justify-center items-center gap-8">
        <nav className="hidden md:flex gap-8 relative">
          {nav.map((navItem, idx) => (
            <div key={idx} className="relative">
              <motion.a
                href={navItem.href}
                className={` font-medium transition-colors pb-1 ${
                  currentHash === navItem.href
                    ? "text-red-600 dark:text-red-600"
                    : ""
                }`}
                whileHover={{
                  scale: 1.1,
                  color: themeMode === "light" ? "#000" : "#DC2626",
                }}
                transition={{ duration: 0.2 }}
              >
                {navItem.label}
              </motion.a>

              {currentHash === navItem.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 text-red-600 dark:text-red-600"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Dark and Light Theme Toggle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:flex"
        >
          {themeMode === "light" ? (
            <MdSunny
              onClick={handleToggle}
              className="w-8 h-8 cursor-pointer"
            />
          ) : (
            <FaCloudMoon
              onClick={handleToggle}
              className="w-8 h-8 cursor-pointer"
            />
          )}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={isOpen ? { y: 0 } : { y: "100%" }}
          transition={{ type: "spring", stiffness: 100 }}
          className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg py-4 dark:bg-transparent dark:backdrop-blur-lg z-50"
        >
          <ul className="grid grid-cols-2 gap-6 px-4">
            {Mobnav.map((nav, idx) => (
              <li key={idx}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center"
                >
                  {nav.logo}
                  <a
                    href={nav.href}
                    className="text-gray-600 hover:text-gray-900 font-medium mt-1 dark:text-gray-300 dark:hover:text-white"
                  >
                    {nav.label}
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="fixed bottom-24 right-6 z-50 bg-gray-100 p-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-110"
        >
          <IoGrid className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Adjust theme icon position on mobile */}
      <div className="md:hidden">
        {themeMode === "light" ? (
          <MdSunny
            onClick={handleToggle}
            className="fixed top-4 right-12 w-8 h-8 cursor-pointer"
          />
        ) : (
          <FaCloudMoon
            onClick={handleToggle}
            className="fixed top-4 right-12 w-8 h-8 cursor-pointer"
          />
        )}
      </div>
    </motion.header>
  );
}

export default Header;
