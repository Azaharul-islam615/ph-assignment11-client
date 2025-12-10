import React, { useState } from "react";

const AllContests = () => {
    const [activeTab, setActiveTab] = useState("All");

    const contests = [
        {
            id: 1,
            name: "Logo Design Challenge",
            type: "Image Design",
            img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
            participants: 120,
            description: "Create a modern and minimalistic logo that represents creativity...",
        },
        {
            id: 2,
            name: "Article Writing Contest",
            type: "Article Writing",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            participants: 98,
            description: "Write a powerful article that inspires youth and carries a strong message...",
        },
        {
            id: 3,
            name: "Photography Showdown",
            type: "Photography",
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
            participants: 87,
            description: "Capture an aesthetic moment that showcases emotion and storytelling...",
        },
        {
            id: 4,
            name: "Business Idea Contest",
            type: "Business Idea",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
            participants: 75,
            description: "Present a unique business solution that solves modern-day problems...",
        },
        {
            id: 5,
            name: "Short Film Competition",
            type: "Film Making",
            img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
            participants: 64,
            description: "Create a short emotional film under 2 minutes with a strong storyline...",
        },
    ];

    const tabs = ["All", "Image Design", "Article Writing", "Photography", "Business Idea", "Film Making"];

    const filteredContests =
        activeTab === "All"
            ? contests
            : contests.filter((contest) => contest.type === activeTab);

    return (
        <div className="w-11/12 mx-auto py-12">

            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">🎯 All Contests</h2>
                <p className="text-gray-300 text-[18px] mt-2">
                    Browse all admin-approved contests by type and join the one that suits your creativity best!
                </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-2 rounded-full text-sm font-medium ${activeTab === tab
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white transition"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContests.map((contest) => (
                    <div key={contest.id} className="card bg-white shadow-lg rounded-xl">
                        <figure>
                            <img
                                src={contest.img}
                                alt={contest.name}
                                className="h-48 w-full object-cover rounded-t-xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">{contest.name}</h2>
                            <p className="text-sm text-gray-600">{contest.description.slice(0, 80)}...</p>
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

            <div className="text-center mt-8">
                <button className="btn btn-outline text-[16px] rounded-xl text-white hover:bg-blue-600 hover:text-white">
                    Show All
                </button>
            </div>
        </div>
    );
};

export default AllContests;
