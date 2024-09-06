import React, { useState } from 'react';
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import emailjs from 'emailjs-com';

function Contact() {
    const [cred, setCred] = useState({name:"",email:"",desc:""});
    const [success, setSuccess] = useState(false);
    const handlechange = (e)=>{
        setSuccess(false);
        const {id, value} = e.target;
        setCred((prevCred)=>({
            ...prevCred,
            [id]:value,
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // Send email with emailjs
        emailjs.send('service_l4lorhe', 'template_y12rie9', cred, 'ZL0Ji6kIghcyI2DtC')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setCred({ name: "", email: "", desc: "" }); // Reset the form
                setSuccess(true); // Show success message
            })
            .catch((error) => {
                console.log('Failed to send email:', error.text);
            });
    }
  return (
    <div id='contact' className='flex flex-col items-center justify-center md:justify-between p-7 md:px-44 gap-8 dark:bg-slate-800 dark:text-white'>
      <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left'>Contact Me</h2>
      <span className='text-gray-500 text-sm md:text-lg text-center md:text-left -mt-5 dark:text-gray-300'>Get In Touch</span>

      <div className='flex flex-col md:flex-row gap-6 justify-between w-full'>
        {/* left part */}
        <div className='w-full md:w-1/2 space-y-6'>
          <h3 className='text-xl font-semibold text-center'>Talk To Me</h3>

          {/* Email */}
          <div className='flex flex-col justify-center items-center shadow-md rounded-lg p-6 bg-white transform transition-transform duration-300 hover:scale-105'>
            <MdAttachEmail className='text-4xl text-red-500' />
            <span className='font-semibold text-lg dark:text-black'>Email</span>
            <span className='text-gray-500'>mdemamudin726@gmail.com</span>
            <button className='flex justify-center items-center gap-1 mt-3 text-blue-500 hover:text-blue-700'>
              <a href="mailto:mdemamudin726@gmail.com?subject=Hello%20from%20your%20portfolio">Write me</a> <FaArrowRight />
            </button>
          </div>

          {/* Whatsapp */}
          <div className='flex flex-col justify-center items-center shadow-md rounded-lg p-6 bg-white transform transition-transform duration-300 hover:scale-105'>
            <FaWhatsapp className='text-4xl text-green-500' />
            <span className='font-semibold text-lg dark:text-black'>Whatsapp</span>
            <span className='text-gray-500'>+91 9973427703</span>
            <a
                href="https://wa.me/919973427703?text=Hello%20from%20your%20portfolio"
                target="_blank" 
                rel="noopener noreferrer"
                className='flex justify-center items-center gap-1 mt-3 text-green-500 hover:text-green-700'
            >
                Message me<FaArrowRight />
            </a>

          </div>
        </div>

        {/* right part */}
        <form onSubmit={handleSubmit} className='w-full md:w-1/2 space-y-5 rounded-lg mb-3'>
          <h3 className='text-xl font-semibold text-center'>Write me Your Feedback</h3>

          {/* Name Input */}
          <fieldset className='border border-gray-400 rounded-md dark:p-2'>
            <legend className='text-sm mx-4 px-1'>Name</legend>
            <input
              type='text'
              className='w-full px-4 py-2 outline-none rounded-md dark:text-black'
              placeholder='Insert Your Name'
              id='name'
              value={cred.name}
              onChange={handlechange}
              required
            />
          </fieldset>

          {/* Email Input */}
          <fieldset className='border border-gray-400 rounded-md dark:p-2'>
            <legend className='text-sm mx-4 px-1'>Email</legend>
            <input
              type='email'
              className='w-full px-4 py-2 outline-none rounded-md dark:text-black'
              placeholder='Insert Your Email'
              id='email'
              value={cred.email}
              onChange={handlechange}
            />
          </fieldset>

          {/* Message Input */}
          <fieldset className='border border-gray-400 rounded-md dark:p-2'>
            <legend className='text-sm mx-4 px-1'>Message</legend>
            <textarea
              className='w-full px-4 py-2 outline-none h-32 rounded-md dark:text-black'
              placeholder='Insert Your Message'
              id='desc'
              value={cred.desc}
              onChange={handlechange}
              required
            />
          </fieldset>

          {/* Submit Button */}
          <div className='flex justify-center md:justify-start items-center gap-2 flex-col md:flex-row'>
            <button className='flex items-center gap-1 bg-black text-white py-2 px-4 rounded-xl hover:bg-gray-800 hover:text-red-500 dark:bg-white dark:text-black dark:hover:text-red-600'>
              <span>Send Message</span>
              <CiLocationArrow1 className='text-xl' />
            </button>
            {success && <span className='text-sm text-green-600 font-semibold dark:text-green-300'>Message Sent SuccessFully !!</span>}
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;
