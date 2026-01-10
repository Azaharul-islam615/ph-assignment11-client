import React, { use } from "react";
import {
    FaTrophy,
    FaMedal,
    FaDollarSign,
    FaCalendarAlt
} from "react-icons/fa";
import UseaxiosSecure from "../../hooks/UseaxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/Authprovider";


const MyWinningContests = () => {
    const { user } = use(AuthContext)
    const axiosSecure = UseaxiosSecure()
    const { refetch, data: payments = [] } = useQuery({

        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })

    return (
        <div data-aos="fade-up" className="w-11/12 mx-auto py-10">
            <title>contestHub-mywinningcontest</title>
            {/* Page Title */}
            <h2 data-aos="fade-up" className="text-4xl font-bold flex items-center gap-3 mb-8 text-white">
                <FaTrophy className="text-yellow-400" />
                My Winning Contests
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {payments
                    .filter(winner => winner.isWinner).map((contest) => (
                        <div
                            key={contest._id}
                            className="bg-[#0C1A4A] text-white rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition"
                        >
                            {/* Contest Name */}
                            <h3 className="text-xl font-bold mb-2">
                                {contest.contestName}
                            </h3>



                            {/* Prize */}
                            <div className="flex items-center gap-2 text-2xl font-bold text-green-400 mb-3">
                                <FaDollarSign />
                                {contest.prizeMoney.toLocaleString()} BDT
                            </div>

                            {/* Position */}
                            <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-3">
                                <FaMedal />
                                {contest.isWinner && "Champion"}
                            </div>


                            {/* Date */}
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                                <FaCalendarAlt />
                                Won on: {contest.winnerDeclaredAt}
                            </div>
                        </div>
                    ))}
            </div>

            {/* Empty State (optional) */}
            {payments.length === 0 && (
                <p className="text-center text-gray-400 mt-12">
                    You haven't won any contests yet 🥲
                </p>
            )}
        </div>
    );
};

export default MyWinningContests;
