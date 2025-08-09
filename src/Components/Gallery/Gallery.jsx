import React from 'react';
import pic1 from "../../assets/road.png"
import pic2 from "../../assets/download.png"
import pic3 from "../../assets/im.png"
import pic4 from "../../assets/images.png"
import pic5 from "../../assets/ro.png"
import pic6 from "../../assets/road.png"
import pic7 from "../../assets/man.png"
import { motion } from 'framer-motion';
const Gallery = () => {
    return (
    <div className='text-center mt-12'>
<motion.h1 

 initial={{ x: 200, y: 200, opacity: 0 }}
        animate={{ x: 20, y: 2, opacity: 1 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
className='text-4xl mb-12 text-blue-600 font-bold '>Our Lettest Photograpgy Gallery</motion.h1>
           <div className='text-center flex justify-center'>

         <div className=' grid gap-8  grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
<motion.div 
 initial={{ x: -300, y: -200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic1} alt="" />
</motion.div>
<motion.div 
 initial={{ x: 500, y: 600, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic4} alt="" />
</motion.div>
<motion.div 
 initial={{ x: -400, y: -400, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 6, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic3} alt="" />
</motion.div>
<motion.div 
 initial={{ x: 300, y: 200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic2} alt="" />
</motion.div>
<motion.div 
 initial={{ x: 300, y: 200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic5} alt="" />
</motion.div>
<motion.div 
 initial={{ x: 300, y: 200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic6} alt="" />
</motion.div>
<motion.div 
 initial={{ x: 300, y: 200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic4} alt="" />
</motion.div>
<motion.div 
 initial={{ x: 300, y: 200, opacity: 0 }}
        animate={{ x: -0, y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
>
                <img className='h-56 w-60 rounded-4xl border-4 border-amber-500' src={pic7} alt="" />
</motion.div>

        </div>
       </div>
    </div>
    );
};

export default Gallery;