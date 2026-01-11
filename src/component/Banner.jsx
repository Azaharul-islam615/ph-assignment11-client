import React, { useState, useEffect } from "react";
import bannerImg1 from "../assets/contest-banner-1.jpg";
import bannerImg2 from "../assets/contest-banner-2.jpg";
import bannerImg3 from "../assets/contest-banner-3.jpg";
import bannerImg4 from "../assets/contest-banner-4.jpg";
import bannerImg5 from "../assets/contest-banner-5.jpg";
import bannerImg6 from "../assets/contest-banner-6.jpg";
import UseaxiosSecure from "../hooks/UseAxiosSecure";

const Banner = () => {
    const axiosSecure = UseaxiosSecure();
    const [searchType, setSearchType] = useState("");
    const [results, setResults] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Slider data
    const slides = [
        {
            title: "Welcome to ContestHub",
            subtitle: "Your gateway to creativity - Join thousands of creators worldwide and showcase your talents.",
            bgImage: bannerImg5
        },
        {
            title: "Discover & Join The Best Creative Contests",
            subtitle: "Explore thousands of design, article writing, idea pitching & more contests.",
            bgImage: bannerImg1
        },
        {
            title: "Showcase Your Writing Skills & Win Amazing Prizes",
            subtitle: "Participate in exciting writing contests and compete with talented writers worldwide.",
            bgImage: bannerImg2
        },
        {
            title: "Share Your Innovative Ideas & Get Recognized",
            subtitle: "Join idea pitching contests and turn your creativity into winning concepts.",
            bgImage: bannerImg3
        },
        {
            title: "Capture Moments & Win Photography Contests",
            subtitle: "Submit your best photos and compete with photographers from around the globe.",
            bgImage: bannerImg4
        },
        {
            title: "Win Amazing Prizes & Get Recognition",
            subtitle: "Cash rewards, certificates, and recognition await the most creative minds on ContestHub.",
            bgImage: bannerImg6
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

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

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative z-0 w-full   h-[70vh] md:h-[80vh] overflow-hidden pb-24">
            {/* Slider Container */}
            <div className="relative w-full   h-[70vh] md:h-[80vh]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Background Image */}
                        <img
                            src={slide.bgImage}
                            className="absolute inset-0 w-full h-full object-cover opacity-40"
                            alt=""
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#050E3C]/90"></div>

                        {/* Content */}
                        <div className="relative z-10 w-11/12 mx-auto h-full flex flex-col justify-center text-center text-white">
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
                                {slide.title}
                            </h1>

                            <p className="mt-4 text-sm md:text-[20px] opacity-90">
                                {slide.subtitle}
                            </p>

                            {/* Search Bar - Show on all slides */}
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
                                                    className="flex justify-between items-center px-4 hover:bg-gray-200 cursor-pointer"
                                                    onClick={() => window.location.href = `/contestdetails/${contest._id}`}
                                                >
                                                    <span>{contest.name}</span>
                                                    <span className="text-blue-600 hover:underline">Details</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-all"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-20 transition-all"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicators */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/70'
                            }`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default Banner;
