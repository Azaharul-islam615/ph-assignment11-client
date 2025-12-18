import React, { useState } from "react";
import bannerImg from "../assets/ChatGPT Image ৯ ডিসে, ২০২৫, ০১_৩৯_৫২ PM.png";
import UseaxiosSecure from "../hooks/UseAxiosSecure";

const Banner = () => {
    const axiosSecure = UseaxiosSecure();
    const [searchType, setSearchType] = useState("");
    const [results, setResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSearch = async () => {
        if (!searchType) return setResults([]);
        try {
            const res = await axiosSecure.get(`/contests/search?type=${searchType}`);
            setResults(res.data);
            setDropdownOpen(true);
        } catch (error) {
            console.error(error);
            setResults([]);
            setDropdownOpen(false);
        }
    };

    return (
        <div data-aos="fade-up" className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden pb-24">
            {/* Background Image */}
            <img
                data-aos="fade-up"
                src={bannerImg}
                className="absolute inset-0 w-full h-full object-cover opacity-40"
                alt=""
            />

            {/* Overlay Gradient */}
            <div data-aos="fade-up" className="absolute  inset-0 bg-gradient-to-b from-black/40 to-[#050E3C]/90"></div>

            {/* Content */}
            <div data-aos="fade-up" className="relative z-10 w-11/12 mx-auto h-full flex flex-col justify-center text-center text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
                    Discover & Join The Best <br /> Creative Contests
                </h1>

                <p className="mt-4 text-sm md:text-lg opacity-90">
                    Explore thousands of design, article writing, idea pitching & more contests.
                </p>

                {/* Search Bar */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="relative w-full md:w-2/3 lg:w-1/2">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Search contest by type…"
                                value={searchType}
                                onChange={(e) => setSearchType(e.target.value)}
                                className="input input-bordered w-full rounded-xl bg-white text-black focus:outline-none"
                            />
                            <button
                                onClick={handleSearch}
                                className="btn bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl px-6 font-semibold"
                            >
                                Search
                            </button>
                        </div>

                        {/* Dropdown Results */}
                        {dropdownOpen && results.length > 0 && (
                            <div className="absolute top-full left-0 mt-[1px] text-[14px] w-full bg-white text-black rounded-lg shadow-lg max-h-72 overflow-y-auto z-50">
                                {results.map((contest) => (
                                    <div
                                        key={contest._id}
                                        className="flex justify-between items-center px-4  hover:bg-gray-200 cursor-pointer"
                                        onClick={() => window.location.href = `/contestdetails/${contest._id}`}
                                    >
                                        <span>{contest.name}</span>
                                        <span className="text-blue-600 hover:underline">Details</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* {dropdownOpen && results.length === 0 && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white text-black rounded-lg shadow-lg px-4 py-2 z-50">
                                No contests found.
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
