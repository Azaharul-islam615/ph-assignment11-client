import React from "react";

const ExtraSectionTwo = () => {
    return (
        <section className="bg-[#050E3C] py-16 text-white">
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
                    <p className="text-gray-300">
                        Participate in contests, submit your work, and get recognized by top creators. Whether you are a designer, writer, or photographer, ContestHub gives you the platform to shine.
                    </p>
                    <ul className="text-gray-300 list-disc list-inside space-y-2">
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
