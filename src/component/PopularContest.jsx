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
            return res.data
        }
    })


    return (
        <div className="w-11/12 mx-auto py-12 ">

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
                                src={contest.image}
                                alt={contest.name}
                                className="h-48 w-full object-cover"
                            />
                        </figure>

                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">
                                {contest.name}
                            </h2>

                            <p className="text-sm text-gray-600">
                                {contest.description?.slice(0, 80)}...
                            </p>

                            <p className="font-medium text-blue-600 mt-2">
                                Participants: {contest.participants}
                            </p>

                            <div className="card-actions justify-end mt-3">
                                <Link to={`/contestdetails/${contest._id}`} className="btn bg-blue-600 text-white hover:bg-blue-700">
                                    Details
                                </Link>
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