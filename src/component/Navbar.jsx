import React, { use } from 'react';
import img1 from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/Authprovider';

const Navbar = () => {
    const { user, logout } = use(AuthContext)

    const handlelogout = () => {
        logout()
            .then(() => {

            })
            .catch(err => {
                console.log(err.message)
            })
    }
   
    const links = <>
        <NavLink to="/" className="text-[16px] mr-5">Home</NavLink>
        <NavLink to="/allcontest" className="text-[16px] mr-5"> All Contests</NavLink>
        <NavLink to="/about" className="text-[16px] mr-5"> About Us</NavLink>
        <NavLink to="/contact" className="text-[16px] mr-5"> Contact</NavLink>
        {user && <>
            <NavLink to="/dashboard" className="text-[16px] mr-5"> Dashboard</NavLink>
        </>}

    </>
   
    return (
        <div className='bg-[#050E3C] '>
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
                        <img className='w-[70px] h-[70px] rounded-full ' src={img1} alt="" />
                        <a className="btn btn-ghost text-2xl p-2 font-extrabold">ContestHub</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <><button onClick={logout}  className="btn mr-2 bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]">Logout</button>
                       
                    </> :<> <Link to="/login" className="btn mr-2 bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]">LogIn</Link>
                        <Link to='/register' className="btn bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]">Register</Link></>
                    }
                    
                   
                </div>
                {user && (
                    <div className="relative group ml-1">
                        {/* Profile Image */}
                        <div className="rounded-full overflow-hidden w-12 h-12 cursor-pointer">
                            <img
                                className="w-full h-full object-cover"
                                src={user.photoURL}
                                alt=""
                            />
                        </div>

                        {/* Hover Dropdown */}
                        <div className="absolute right-0 mt-2 bg-[#050E3C] text-white text-sm px-3 py-2 rounded-lg shadow-lg hidden group-hover:block z-50">
                            <p>{user.displayName}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;