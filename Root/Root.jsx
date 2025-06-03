import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../src/Components/Footer/Footer';




const Root = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;