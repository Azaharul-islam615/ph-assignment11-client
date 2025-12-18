import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";

const Leaderboard = () => {
    const axiosSecure = UseaxiosSecure();

    // 🔹 Fetch leaderboard data
    const { data: payments = [], isLoading, error } = useQuery({
        queryKey: ["leaderboard"],
        queryFn: async () => {
            const res = await axiosSecure.get("/leaderboard");
            return res.data;
        },
    });

    if (isLoading)
        return <p className="text-white text-center mt-10">Loading...</p>;
    if (error)
        return <p className="text-white text-center mt-10">Something went wrong!</p>;

    // 🔹 Calculate wins per user
    const winCountMap = {};
    payments.forEach((p) => {
        const email = p.customerEmail;
        if (!winCountMap[email]) {
            winCountMap[email] = { wins: 0, name: p.userName };
        }
        if (p.isWinner) {
            winCountMap[email].wins += 1;
        }
    });

    const leaderboard = Object.entries(winCountMap)
        .map(([email, data]) => ({
            email,
            userName: data.name,
            wins: data.wins,
        }))
        .sort((a, b) => b.wins - a.wins);

    return (
        <div className="min-h-screen bg-[#050E3C] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto bg-[#0C1A4A] p-4 md:p-8 rounded-xl shadow-lg overflow-x-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Leaderboard</h1>

                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="border-b border-gray-600">
                            <th className="py-2 px-4 text-sm md:text-base">Rank</th>
                            <th className="py-2 px-4 text-sm md:text-base">User</th>
                            <th className="py-2 px-4 text-sm md:text-base">Name</th>
                            <th className="py-2 px-4 text-sm md:text-base">Wins</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaderboard.map((user, index) => (
                            <tr
                                key={user.email}
                                className={`${index % 2 === 0 ? "bg-[#1F2A63]" : "bg-[#162151]"}`}
                            >
                                <td className="py-2 px-4 font-semibold text-sm md:text-base">{index + 1}</td>
                                <td className="py-2 px-4 text-sm md:text-base">{user.email}</td>
                                <td className="py-2 px-4 font-bold text-indigo-400 text-sm md:text-base">{user.userName}</td>
                                <td className="py-2 px-4 font-bold text-indigo-400 text-sm md:text-base">{user.wins}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Leaderboard;
