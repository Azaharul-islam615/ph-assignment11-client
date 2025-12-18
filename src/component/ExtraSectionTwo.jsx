import React, { use } from "react";
import { AuthContext } from "../Context/Authprovider";

const ExtraSectionTwo = () => {
    const {toggle}=use(AuthContext)
    return (
        <section className={` ${toggle ? 'bg - [#050E3C]':'bg-white text-black'} py-16 text-white`}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

                {/* Illustration */}
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Join Contest"
                        className="rounded-xl shadow-lg w-full"
                    />

                </div>

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-4xl font-extrabold text-white">
                        Showcase Your Talent
                    </h2>
                    <p className={`${toggle ? 'text-gray-300' : 'text-black'}`}>
                        Participate in contests, submit your work, and get recognized by top creators. Whether you are a designer, writer, or photographer, ContestHub gives you the platform to shine.
                    </p>
                    <ul className={`${toggle ? 'text-gray-300' : 'text-black'} list-disc list-inside space-y-2`}>
                        <li>Easy-to-join contests</li>
                        <li>Track your submissions and winnings</li>
                        <li>Connect with other creative minds</li>
                    </ul>

                    {/* CTA Button */}
                    <a
                        href="/all-contests"
                        className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition mt-4"
                    >
                        Join Now
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ExtraSectionTwo;
