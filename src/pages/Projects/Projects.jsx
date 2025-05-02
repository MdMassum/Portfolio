import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainProj from "./MainProj";
import PractiseProj from "./PractiseProj";
import { FaRocket, FaTools } from "react-icons/fa";

function Projects() {
  const [activeTab, setActiveTab] = useState("Main");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-around md:justify-between p-7 md:px-44 gap-2 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black dark:text-white overflow-hidden"
    >
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
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-gray-600 via-gray-300 to-gray-600 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
          My Projects
        </h1>

        <motion.span
          initial={{ width: 0 }}
          animate={inView ? { width: "60%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block h-1 bg-red-500 mt-2 md:mx-0"
        />
      </motion.div>

      <span className="text-gray-500 text-sm md:text-lg text-center md:text-left mt-2 dark:text-gray-300">
        Most Recent Work
      </span>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center gap-4 md:gap-6 mb-1 mt-10 texl-lg md:text-xl"
      >
        <button
          className={`relative flex flex-col items-start gap-1 ${
            activeTab === "Main"
              ? "text-red-600 font-semibold"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("Main")}
        >
          <div className="flex gap-1 items-center">
          <FaRocket />
          Main Projects
          </div>
          {activeTab === "Main" && (
            <motion.span
              layoutId="underline"
              className="h-1 w-14 bg-red-500 rounded origin-left"
            />
          )}
        </button>

        <button
          className={`relative flex flex-col items-start gap-1 ${
            activeTab === "Practise"
              ? "text-red-600 font-semibold"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("Practise")}
        >
          <div className="flex gap-1 items-center">
          <FaTools />
          Practise Projects
          </div>
          
          {activeTab === "Practise" && (
            <motion.span
              layoutId="underline"
              className="h-1 w-14 bg-red-500 rounded origin-left"
            />
          )}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {activeTab === "Main" ? <MainProj /> : <PractiseProj />}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
