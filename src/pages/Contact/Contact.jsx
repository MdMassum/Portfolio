import React, { useState } from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [cred, setCred] = useState({ name: "", email: "", desc: "" });
  const [success, setSuccess] = useState(false);

  const handlechange = (e) => {
    setSuccess(false);
    const { id, value } = e.target;
    setCred((prevCred) => ({
      ...prevCred,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_l4lorhe", "template_y12rie9", cred, "ZL0Ji6kIghcyI2DtC")
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setCred({ name: "", email: "", desc: "" });
        setSuccess(true);
      })
      .catch((error) => {
        console.log("Failed to send email:", error.text);
      });
  };

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center md:justify-between p-7 md:px-44 gap-8 dark:bg-gradient-to-b dark:from-black dark:via-gray-700 dark:to-black dark:text-white overflow-hidden"
    >
      <div className="flex flex-col items-start gap-2 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center md:text-left dark:text-white"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "60%" } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-red-500 rounded"
        />
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-500 text-sm md:text-lg text-center md:text-left -mt-5 dark:text-gray-300"
      >
        Get In Touch
      </motion.span>

      <div className="flex flex-col md:flex-row gap-6 justify-between w-full">
        {/* Left Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl font-semibold text-center"
          >
            Talk To Me
          </motion.h3>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col justify-center items-center shadow-md rounded-lg p-6 bg-white transform transition-transform duration-300 hover:scale-105 dark:bg-gradient-to-b dark:from-gray-300 dark:via-rose-200 dark:to-gray-300"
          >
            <MdAttachEmail className="text-4xl text-red-500" />
            <span className="font-semibold text-lg dark:text-black">Email</span>
            <span className="text-gray-500 dark:text-gray-600">mdemamudin726@gmail.com</span>
            <button className="flex justify-center items-center gap-1 mt-3 text-red-500 hover:text-red-700">
              <a href="mailto:mdemamudin726@gmail.com?subject=Hello%20from%20your%20portfolio">
                Write me
              </a>
              <FaArrowRight />
            </button>
          </motion.div>

          {/* Whatsapp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col justify-center items-center shadow-md rounded-lg p-6 bg-white transform transition-transform duration-300 hover:scale-105 dark:bg-gradient-to-b dark:from-gray-300 dark:via-green-200 dark:to-gray-300"
          >
            <FaWhatsapp className="text-4xl text-green-500" />
            <span className="font-semibold text-lg dark:text-black">
              Whatsapp
            </span>
            <span className="text-gray-500 dark:text-gray-600">+91 9973427703</span>
            <a
              href="https://wa.me/919973427703?text=Hello%20from%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-1 mt-3 text-green-600 hover:text-green-700"
            >
              Message me <FaArrowRight />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Part */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-5 rounded-lg mb-3"
        >
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-xl font-semibold text-center"
          >
            Write me Your Feedback
          </motion.h3>

          {/* Name Input */}
          <motion.fieldset
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="border border-gray-400 rounded-md dark:p-2"
          >
            <legend className="text-sm mx-4 px-1">Name</legend>
            <input
              type="text"
              className="w-full px-4 py-2 outline-none rounded-md dark:text-black dark:bg-gradient-to-b dark:from-gray-300 dark:via-gray-50 dark:to-gray-400"
              placeholder="Insert Your Name"
              id="name"
              value={cred.name}
              onChange={handlechange}
              required
            />
          </motion.fieldset>

          {/* Email Input */}
          <motion.fieldset
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="border border-gray-400 rounded-md dark:p-2"
          >
            <legend className="text-sm mx-4 px-1">Email</legend>
            <input
              type="email"
              className="w-full px-4 py-2 outline-none rounded-md dark:text-black dark:bg-gradient-to-b dark:from-gray-300 dark:via-gray-50 dark:to-gray-400"
              placeholder="Insert Your Email"
              id="email"
              value={cred.email}
              onChange={handlechange}
            />
          </motion.fieldset>

          {/* Message Input */}
          <motion.fieldset
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="border border-gray-400 rounded-md dark:p-2"
          >
            <legend className="text-sm mx-4 px-1">Message</legend>
            <textarea
              className="w-full px-4 py-2 outline-none h-32 rounded-md dark:text-black dark:bg-gradient-to-b dark:from-gray-300 dark:via-gray-50 dark:to-gray-400"
              placeholder="Insert Your Message"
              id="desc"
              value={cred.desc}
              onChange={handlechange}
              required
            />
          </motion.fieldset>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex justify-center md:justify-start items-center gap-2 flex-col md:flex-row"
          >
            <button className="flex items-center gap-1 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 hover:text-red-500 dark:text-black dark:hover:bg-red-600 dark:hover:text-white dark:bg-white">
              <span>Send Message</span>
              <CiLocationArrow1 className="text-xl" />
            </button>
            {success && (
              <span className="text-sm text-green-600 font-semibold dark:text-green-300">
                Message Sent SuccessFully !!
              </span>
            )}
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
