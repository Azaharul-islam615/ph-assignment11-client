import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';

const Homelayout = () => {
    return (
        <div className='merriweather bg-[#0A102F]
'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Homelayout;