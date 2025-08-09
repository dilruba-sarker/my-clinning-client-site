import React from 'react'


import img from '../../assets/bosu.png'
import img1 from '../../assets/madia.png'
import img2 from '../../assets/radh.png'
import img3 from '../../assets/pran.png'
export default function Sponsor() {
  return (
    <div className=' text-center'>
        <h1 className='text-4xl font-bold mt-6 -mb-4'> 
         Our Sponsors</h1> 

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-2 ml-24 lg:ml-0 md:ml-16'>
    <img src={img} alt="" />
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
</div>

       </div>
  )
}
