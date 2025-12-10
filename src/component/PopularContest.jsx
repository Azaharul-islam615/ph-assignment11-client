import React from "react";
import { Link } from "react-router";

const PopularContests = () => {
    const contests = [
        {
            id: 1,
            name: "Logo Design Challenge",
            img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
            participants: 120,
            description: "Create a modern and minimalistic logo that represents creativity...",
        },
        {
            id: 2,
            name: "Article Writing Contest",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            participants: 98,
            description: "Write a powerful article that inspires youth and carries a strong message...",
        },
        {
            id: 3,
            name: "Photography Showdown",
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
            participants: 87,
            description: "Capture an aesthetic moment that showcases emotion and storytelling...",
        },
        {
            id: 4,
            name: "Business Idea Contest",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
            participants: 75,
            description: "Present a unique business solution that solves modern-day problems...",
        },
        {
            id: 5,
            name: "Short Film Competition",
            img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
            participants: 64,
            description: "Create a short emotional film under 2 minutes with a strong storyline...",
        },
    ];

    return (
        <div className="w-11/12 mx-auto py-12">

            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">🔥 Popular Contests</h2>
                <p className="text-gray-300 text-[18px] mt-2 ">
                    Explore the most trending and highly participated contests happening <br /> right now.
                    Join the competition and showcase your <br /> creativity to become the next winner!
                </p>
            </div>

            
           

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contests.map((contest) => (
                    <div key={contest.id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={contest.img}
                                alt={contest.name}
                                className="h-48 w-full object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">
                                {contest.name}
                            </h2>

                            <p className="text-sm text-gray-600">
                                {contest.description.slice(0, 80)}...
                            </p>

                            <p className="font-medium text-blue-600 mt-2">
                                Participants: {contest.participants}
                            </p>

                            <div className="card-actions justify-end mt-3">
                                <button className="btn bg-blue-600 text-white hover:bg-blue-700">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 ">
                <Link to="/allcontest" className="btn btn-outline text-[16px] rounded-xl text-white hover:bg-blue-600 hover:text-white">
                    Show All
                </Link>
            </div>
        </div>
    );
};

export default PopularContests;
