import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";

const About = () => {
    const {toggle}=use(AuthContext)
    return (
        <section className={`${toggle ? ' text-white' : 'bg-white text-black'}  py-16`}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

                {/* Image */}
                <div className="md:w-1/2 ">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661420256620-3a3fbf9ec651?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000"
                        alt="About Us"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>

                {/* Text */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl font-extrabold text-white">
                        About ContestHub
                    </h2>
                    <p className={`${toggle ? 'text-gray-300 ' : ' text-black' } text-lg`}>
                        ContestHub is a modern platform that empowers creators and participants
                        to showcase their talents in various competitions. We aim to connect
                        creative minds with exciting opportunities and rewarding experiences.
                    </p>
                    <ul className={`list-disc list-inside ${toggle ? 'text-gray-300 ' : ' text-black' } space-y-2`}>
                        <li>Participate in a wide range of contests</li>
                        <li>Track your submissions and achievements</li>
                        <li>Get recognized by top creators</li>
                        <li>Win exciting prizes and build your portfolio</li>
                    </ul>
                    <Link 
                        to='/allcontest'
                        className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition mt-4"
                    >
                        Explore Contests
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default About;
