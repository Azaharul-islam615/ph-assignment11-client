import React, { use, useEffect, useState } from 'react';
import img1 from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png";
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/Authprovider';
import { CgLogOut } from 'react-icons/cg';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const [openProfile, setOpenProfile] = useState(false);
    const { setToggle } = use(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                setOpenProfile(false);
            })
            .catch(err => console.log(err.message));
    };

    const links = (
        <>
            <NavLink to="/" className="text-[18px] mr-5">Home</NavLink>
            <NavLink to="/allcontest" className="text-[18px] mr-5">All Contests</NavLink>
            <NavLink to="/about" className="text-[18px] mr-5">About Us</NavLink>
            <NavLink to="/contact" className="text-[18px] mr-5">Contact</NavLink>
            <NavLink to="/terms" className="text-[18px] mr-5">Terms</NavLink>

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
        <div className="bg-[#050E3C] fixed top-0 z-10 w-full ">
            <div className="navbar w-11/12 mx-auto text-white shadow-sm">
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
                            tabIndex={0}
                            className="menu  absolute top-6 z-40 right-[-150px] text-[8px] menu-sm dropdown-content bg-black rounded-box mt-3 w-52 p-2 shadow "
                        >
                            {links}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <img
                            className="hidden md:block md:w-[60px] md:h-[60px] rounded-full"
                            src={img1}
                            alt=""
                        />
                        <a className="btn btn-ghost text-[18px] md:text-2xl p-2 font-extrabold">
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
                    <input onClick={handleTheme} type="checkbox" defaultChecked className="md:mr-2 toggle toggle-warning" />
                    {!user &&
                        <>
                            <Link
                                to="/login"
                                className="btn rounded-lg bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]"
                            >
                                LogIn
                            </Link>
                            <Link
                                to="/register"
                                className="btn rounded-lg bg-[#050E3C] text-white hover:bg-[#2563EB] font-semibold text-[16px]"
                            >
                                Register
                            </Link>
                        </>

                    }
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
                                <div className="absolute border-[1.5px] border-blue-500 p-4 right-0 mt-2 w-80 bg-[#050E3C] text-white rounded-lg shadow-lg z-50 ">
                                    <img className='rounded-full w-[70px] mx-auto mb-2' src={user.photoURL} alt="" />
                                    <p className="font-semibold border-b text-center border-gray-600 pb-2 ">
                                        {user.displayName}
                                    </p>
                                    <div className='flex justify-center mt-2'> <Link to="/dashboard/myProfile" className='btn bg-gradient-to-r from-[#050E3C] to-[#1E40FF]
 rounded-lg mx-auto text-white'>Veiwe Profile</Link></div>

                                    <Link
                                        to="/dashboard"
                                        className="block text-[15px] mt-8 hover:text-blue-400 border-b border-gray-600"
                                        onClick={() => setOpenProfile(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        to="/asction"
                                        className="block text-[15px] mt-2 hover:text-blue-400 border-b border-gray-600"
                                        onClick={() => setOpenProfile(false)}
                                    >
                                        Actionable Dashboard
                                    </Link>

                                    <Link
                                        to=""
                                        className="block text-[15px] mt-2 hover:text-blue-400 border-b border-gray-600"
                                        onClick={() => setOpenProfile(false)}
                                    >
                                        Settings
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="mt-2 flex text-red-500 items-center gap-1  text-[15px] w-full text-left hover:text-red-400"
                                    >
                                        Logout <CgLogOut color='red' size={24} />
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