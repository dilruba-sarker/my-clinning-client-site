import React from 'react';

import img1 from "../../assets/im.png"
import img2 from "../../assets/download.png"
import { motion } from 'framer-motion';

const Feature = () => {

    return (
        <div className=''>

            <div className='text-center mt-4'>
            <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl font-extrabold text-amber-500 mb-2"
      >
        Welcome to Our Road Cleaning Club
      </motion.h1>
           
            <motion.h1 
              initial={{ x: 200, y: 200, opacity: 0 }}
        animate={{ x: 20, y: 2, opacity: 1 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
            className='text-4xl font-extrabold text-blue-500'>Our Latest Features</motion.h1>


            <h1  className='text-xl font-extrabold text-amber-400'>Get Direction To The Event Venue</h1>
<div className="flex flex-col md:flex-row mt-16  md:gap-4">

    <div className='relative'>

    <motion.div
     initial={{ x: -300, y: -200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
    ><img className='w-md mt-4 rounded-bl-4xl rounded-tr-4xl' src={img1} alt="" /></motion.div>
    <motion.div
     initial={{ x: 300, y: 200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
    className='absolute left-60 top-24 '><img className='rounded-bl-4xl rounded-tr-4xl' src={img2} alt="" /></motion.div>
    
</div>
<div className=''>
    
    
     <div className="google-map-code m-8 md:m-0">
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
             
                height="300"
                className='w-sm md:w-md lg:w-xl '
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Event Location"
              />
    </div>
    </div>
</div>
        </div>
      
        </div>
    );
};

export default Feature;