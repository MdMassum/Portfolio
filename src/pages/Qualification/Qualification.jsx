import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Education from "./Education";
import Experience from "./Experience";

function Qualification() {
  const [activeTab, setActiveTab] = useState("Experience");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="portfolio"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-around md:justify-between p-7 md:py-16 md:px-44 gap-2 dark:bg-gradient-to-b dark:from-black dark:via-gray-800 dark:to-black dark:text-white pb-16 overflow-hidden"
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
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-gray-600 via-gray-300 to-gray-600 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 bg-clip-text text-transparent">
          Qualification
        </h2>

        <motion.span
          initial={{ width: 0 }}
          animate={inView ? { width: "60%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="block h-1 bg-red-500 mt-2 md:mx-0"
        />
      </motion.div>

      <span className="text-gray-500 text-sm md:text-lg text-center md:text-left dark:text-gray-300">
        My Personal Journey
      </span>

      <div className="flex justify-center gap-6 mb-10 mt-10 text-xl">
      <button
          className={`relative flex flex-col items-start gap-1 ${
            activeTab === "Experience"
              ? "text-red-600 font-semibold"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("Experience")}
        >
          
          <div className="flex gap-1 items-center">
          <FaBriefcase />
          Experience
          </div>
          {activeTab === "Experience" && (
            <motion.span
              layoutId="underline"
              className="h-1 w-14 bg-red-500 rounded origin-left"
            />
          )}
        </button>
        <button
          className={`relative flex flex-col items-start gap-1 ${
            activeTab === "Education"
              ? "text-red-600 font-semibold"
              : "text-gray-500 dark:text-gray-300"
          }`}
          onClick={() => setActiveTab("Education")}
        >
          <div className="flex gap-1 items-center">
          <FaGraduationCap />
          Education
          </div>
          
          {activeTab === "Education" && (
            <motion.span
              layoutId="underline"
              className="h-1 w-14 bg-red-500 rounded origin-left"
            />
          )}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {activeTab === "Education" ? <Education /> : <Experience />}
      </motion.div>
    </motion.section>
  );
}

export default Qualification;
