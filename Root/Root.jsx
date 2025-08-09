import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../src/Components/Footer/Footer';




const Root = () => {
    return (
        <div className=' mx-auto'>
            <Navbar></Navbar>
          
            <div className='mt-20'>  <Outlet></Outlet> </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;