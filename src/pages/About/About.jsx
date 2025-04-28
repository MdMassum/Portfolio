import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profile from "../../assets/profile.jpg";
import AboutData from "./AboutData.jsx";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1 }}
      id="about"
      className="flex flex-col items-center justify-around md:justify-between p-7 md:py-16 md:px-44 gap-6 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black dark:text-white overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative inline-block text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>

        <motion.span
          initial={{ width: 0 }}
          animate={inView ? { width: "60%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block h-1 bg-red-500 mt-2 mx-auto md:mx-0"
        />
      </motion.div>

      {/* Subheading */}
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-500 text-sm md:text-lg text-center md:text-left -mt-3 dark:text-gray-300"
      >
        My Introduction
      </motion.span>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20 w-full">
        {/* Profile Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          src={profile}
          alt="Profile"
          className="w-40 md:w-52 h-40 md:h-52 rounded-full object-cover border-4 border-gray-300 shadow-xl"
        />

        {/* AboutData Component */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full md:w-2/3"
        >
          <AboutData />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
