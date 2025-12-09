import React from 'react';
import img1 from"../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png"
import { NavLink } from 'react-router';

const Navbar = () => {
    const links=<>
        <NavLink className="text-[16px] mr-5">Home</NavLink>
        <NavLink className="text-[16px] mr-5"> All Contests</NavLink>
        <NavLink className="text-[16px] mr-5"> LogIn</NavLink>
        <NavLink className="text-[16px]"> Register</NavLink>
    </>
    return (
        <div className='bg-[#050E3C]'>
            <div className="  navbar text-white shadow-sm  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <div className='flex items-center '>
                        <img className='w-[40px] h-[40px] ' src={img1} alt="" />
                        <a className="btn btn-ghost text-2xl p-2 font-extrabold">ContestHub</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]">Button</a>
                </div>
            </div>
       </div>
    );
};

export default Navbar;