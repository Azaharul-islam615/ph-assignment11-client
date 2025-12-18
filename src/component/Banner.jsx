import React from "react";
import bannerImg from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png"; // your banner image

const Banner = () => {
    return (
        <div className="relative w-full h-[70vh] md:h-[80vh]  overflow-hidden">

            {/* Background Image */}
            <img
                src={bannerImg}
                className="absolute  inset-0 w-full h-full object-cover opacity-40"
                alt=""
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#050E3C]/90"></div>

            {/* Content */}
            <div className="relative z-10 w-11/12 mx-auto h-full flex flex-col justify-center text-center text-white">

                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
                    Discover & Join The Best <br /> Creative Contests
                </h1>

                <p className="mt-4 text-sm md:text-lg opacity-90">
                    Explore thousands of design, article writing, idea pitching & more contests.
                </p>

                {/* Search Bar */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="w-full md:w-2/3 lg:w-1/2 flex gap-2">
                        <input
                            type="text"
                            placeholder="Search contest by type…"
                            className="input input-bordered w-full rounded-xl bg-white text-black focus:outline-none"
                        />
                        <button className="btn bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl px-6 font-semibold">
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
