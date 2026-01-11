import React, { use, useState, useMemo } from "react";
import UseaxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";

const AllContests = () => {
    const { toggle } = use(AuthContext);
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("name"); // default sort by name
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const axiosSecure = UseaxiosSecure();
    const { data: contests = [] } = useQuery({
        queryKey: ["contest", "approved"],
        queryFn: async () => {
            const res = await axiosSecure.get("/contest?status=approved");
            return res.data;
        },
    });

    const tabs = ["All", "design", "writing", "coding"];

    // Filter by active tab
    const filteredByTab = useMemo(
        () =>
            activeTab === "All"
                ? contests
                : contests.filter((contest) => contest.type === activeTab),
        [contests, activeTab]
    );

    // Filter by search term
    const filteredBySearch = useMemo(
        () =>
            filteredByTab.filter(
                (contest) =>
                    contest.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    contest.description?.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [filteredByTab, searchTerm]
    );

    // Sort
    const sortedContests = useMemo(() => {
        return [...filteredBySearch].sort((a, b) => {
            if (sortOption === "name") {
                return (a.name || "").localeCompare(b.name || "");
            } else if (sortOption === "prize") {
                return (a.prize || 0) - (b.prize || 0);
            } else if (sortOption === "participants") {
                return (a.participants || 0) - (b.participants || 0);
            }
            return 0;
        });
    }, [filteredBySearch, sortOption]);

    // Pagination
    const totalPages = Math.ceil(sortedContests.length / itemsPerPage);
    const paginatedContests = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return sortedContests.slice(start, end);
    }, [sortedContests, currentPage]);

    return (
        <div className={`w-11/12 mx-auto py-24`}>
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className={`${toggle ? "text-white" : "text-black"} text-4xl font-bold`}>
                    🎯 All Contests
                </h2>
                <p className={` text-[20px] text-gray-300 mt-2`}>
                    Browse all admin-approved contests by type and join the one that suits your creativity best!
                </p>
            </div>

            {/* Tabs */}
            

            {/* Search & Sort */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
                <input
                    type="text"
                    placeholder="Search contests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 text-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-none"
                />

                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border border-gray-300 text-gray-300 rounded-lg px-4 py-2"
                >
                    <option className="text-gray-800" value="name">Sort by Name</option>
                    <option className="text-gray-800" value="prize">Sort by Prize</option>
                    <option className="text-gray-800" value="participants">Sort by Participants</option>
                </select>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <title>contestHub-allcontest</title>
                {paginatedContests.map((contest) => (
                    <div
                        key={contest._id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between hover:scale-[1.02] duration-300 border border-transparent hover:border-blue-500"
                    >
                        <img
                            src={contest.image}
                            alt={contest.name || contest.contestName || "Contest"}
                            className="w-full h-44 object-cover rounded-t-lg hover:scale-110 transition duration-300"
                        />

                        <div className="px-3 py-2 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-800">
                                {contest.name || contest.contestName || "Contest Name"}
                            </h3>
                            <p className="text-md text-gray-800 mt-1">Prize: {contest.prize}</p>
                            <p className="text-md text-gray-800 mt-1">
                                Participants: {contest.participants || contest.participantCount || 0}
                            </p>
                            <p className="text-md text-gray-800 mt-1 mb-1">
                                Description: {contest.description || contest.contestDescription || "No description available"}
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

            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white transition disabled:opacity-50"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white transition ${currentPage === i + 1 ? "bg-blue-600 text-white" : ""
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-4 py-2 border rounded-lg hover:bg-blue-600 hover:text-white transition disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllContests;
