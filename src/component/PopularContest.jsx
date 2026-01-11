import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router";
import UseaxiosSecure from "../hooks/UseAxiosSecure";

const PopularContests = () => {
    const axiosSecure = UseaxiosSecure()
    const { data: contests = [], refetch } = useQuery({
        queryKey: ['contest', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/popular`)
            console.log('API Response:', res.data); // Debug log
            return res.data
        }
    })

    console.log('Contests data:', contests); // Debug log

    return (
        <div className="w-11/12 mx-auto pt-12 ">

            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">🔥 Popular Contests</h2>
                <p className="text-gray-300 text-[20px] mt-2 ">
                    Explore the most trending and highly participated contests happening <br /> right now.
                    Join the competition and showcase your <br /> creativity to become the next winner!
                </p>
            </div>

            {/* Cards Grid */}
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
                {contests.map((contest) => (

                    <div
                        key={contest._id}
                        className="bg-white flex flex-col  rounded-lg overflow-hidden shadow-lg flex flex-col justify-between hover:scale-[1.02] duration-300 border border-transparent hover:border-blue-500"
                    >
                        <img
                            src={contest.image }
                            alt={contest.name || contest.contestName || 'Contest'}
                            className="w-full h-44 object-cover rounded-t-lg hover:scale-110 transition duration-300"
                            
                        />

                        <div className="px-3 py-2 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800">{contest.name || contest.contestName || 'Contest Name'}</h3>
                            <p className="text-md text-gray-800 mt-1">
                                Prize: {contest.prize}
                            </p>
                            <p className="text-md text-gray-800 mt-1">
                                Participants: {contest.participants || contest.participantCount || 0}
                            </p>
                            <p className="text-md text-gray-800 mt-1 mb-1">
                                Description: {contest.description || contest.contestDescription || 'No description available'}
                            </p>


                            <Link to={`/contestdetails/${contest._id}`} className="mt-auto">
                                <button className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded-lg transition font-semibold tracking-wide">
                                    View Details
                                </button>
                            </Link>
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