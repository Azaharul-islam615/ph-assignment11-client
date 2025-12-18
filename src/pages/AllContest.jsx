import React, { use, useState } from "react";
import UseaxiosSecure from "../hooks/UseaxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";

const AllContests = () => {
    const {toggle}=use(AuthContext)
    const [activeTab, setActiveTab] = useState("All");
    const axiosSecure = UseaxiosSecure()
    const { data: contests = [] } = useQuery({
        queryKey: ['contest', 'approved'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contest?status=approved');
            return res.data;
        }
    });
    console.log(contests)

    

    const tabs = ["All", "design", "writing", "coding"];

    const filteredContests =
        activeTab === "All"
            ? contests
            : contests.filter((contest) => contest.type === activeTab);

    return (
        <div className={` ${toggle ===false && 'bg-white text-black' } w-11/12 mx-auto py-12`}>

            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className={` ${toggle ? 'text-white ' : ' text-black' } text-4xl font-bold `}>🎯 All Contests</h2>
                <p className={`${toggle ? 'text-gray-300 ' : ' text-black' } text-[18px] mt-2`}>
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
                    <div key={contest._id} className="card bg-white shadow-lg rounded-xl">
                        <figure>
                            <img
                                src={contest.image}
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
                                <Link to={`/contestdetails/${contest._id}`} className="btn bg-blue-600 text-white hover:bg-blue-700">
                                    Details
                                </Link>
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
