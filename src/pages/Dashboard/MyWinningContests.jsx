import React from "react";
import {
    FaTrophy,
    FaMedal,
    FaDollarSign,
    FaCalendarAlt
} from "react-icons/fa";

const MyWinningContests = () => {
    const winningContests = [
        {
            id: 1,
            name: "Creative Logo Design Contest",
            prize: 15000,
            position: "1st Place",
            category: "Design",
            date: "2025-02-10",
        },
        {
            id: 2,
            name: "Short Story Writing Challenge",
            prize: 8000,
            position: "2nd Place",
            category: "Writing",
            date: "2025-01-28",
        },
        {
            id: 3,
            name: "Web App Coding Contest",
            prize: 20000,
            position: "Champion",
            category: "Coding",
            date: "2024-12-15",
        },
    ];

    return (
        <div className="w-11/12 mx-auto py-10">
            {/* Page Title */}
            <h2 className="text-4xl font-bold flex items-center gap-3 mb-8 text-white">
                <FaTrophy className="text-yellow-400" />
                My Winning Contests
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {winningContests.map((contest) => (
                    <div
                        key={contest.id}
                        className="bg-[#0C1A4A] text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition"
                    >
                        {/* Contest Name */}
                        <h3 className="text-xl font-bold mb-2">
                            {contest.name}
                        </h3>

                        {/* Category */}
                        <p className="text-sm text-indigo-300 mb-4">
                            Category: {contest.category}
                        </p>

                        {/* Prize */}
                        <div className="flex items-center gap-2 text-2xl font-bold text-green-400 mb-3">
                            <FaDollarSign />
                            {contest.prize.toLocaleString()} BDT
                        </div>

                        {/* Position */}
                        <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-3">
                            <FaMedal />
                            {contest.position}
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <FaCalendarAlt />
                            Won on: {contest.date}
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State (optional) */}
            {winningContests.length === 0 && (
                <p className="text-center text-gray-400 mt-12">
                    You haven't won any contests yet 🥲
                </p>
            )}
        </div>
    );
};

export default MyWinningContests;
