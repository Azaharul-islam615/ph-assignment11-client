import React, { use, useEffect, useState } from 'react';
import img1 from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/Authprovider';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const [openProfile, setOpenProfile] = useState(false);
    const {setToggle}=use(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                setOpenProfile(false);
            })
            .catch(err => console.log(err.message));
    };

    const links = (
        <>
            <NavLink to="/" className="text-[16px] mr-5">Home</NavLink>
            <NavLink to="/allcontest" className="text-[16px] mr-5">All Contests</NavLink>
            <NavLink to="/about" className="text-[16px] mr-5">About Us</NavLink>
            <NavLink to="/contact" className="text-[16px] mr-5">Contact</NavLink>
            {user && (
                <NavLink to="/dashboard" className="text-[16px] mr-5">
                    Dashboard
                </NavLink>
            )}
        </>
    );
    useEffect(() => {
        const savedToggle = localStorage.getItem('toggle');
        if (savedToggle) {
            setToggle(savedToggle === 'true');
        }
    }, []);

    const handleTheme = () => {
        setToggle(prev => {
            const newToggle = !prev;
            localStorage.setItem('toggle', newToggle);
            return newToggle;
        });
    };

    return (
        <div className="bg-[#050E3C]">
            <div className="navbar text-white shadow-sm">
                {/* LEFT */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <img className="w-[70px] h-[70px] rounded-full" src={img1} alt="" />
                        <a className="btn btn-ghost text-2xl p-2 font-extrabold">
                            ContestHub
                        </a>
                    </div>
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end flex items-center gap-2">
                    <input onClick={handleTheme} type="checkbox" defaultChecked className="mr-2 toggle toggle-warning" />
                    {!user ? (
                        <>
                            <Link
                                to="/login"
                                className="btn bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]"
                            >
                                LogIn
                            </Link>
                            <Link
                                to="/register"
                                className="btn bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="btn bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]"
                        >
                            Logout
                        </button>
                    )}

                    {/* PROFILE DROPDOWN */}
                    {user && (
                        <div className="relative ml-1">
                            {/* Profile Image */}
                            <div
                                onClick={() => setOpenProfile(!openProfile)}
                                className="rounded-full overflow-hidden w-12 h-12 cursor-pointer border-2 border-indigo-500"
                            >
                                <img
                                    src={user.photoURL}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Dropdown */}
                            {openProfile && (
                                <div className="absolute right-0 mt-2 w-44 bg-[#050E3C] text-white rounded-lg shadow-lg z-50 p-3">
                                    <p className="font-semibold border-b border-gray-600 pb-1">
                                        {user.displayName}
                                    </p>

                                    <Link
                                        to="/dashboard"
                                        className="block mt-2 hover:text-blue-400"
                                        onClick={() => setOpenProfile(false)}
                                    >
                                        Dashboard
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="mt-2 w-full text-left hover:text-red-400"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
