import React from "react";

const MyCreatedContests = () => {
    const contests = [
        {
            _id: 1,
            name: "Logo Design Contest",
            type: "Design",
            price: 10,
            prize: 100,
            status: "pending",
        },
        {
            _id: 2,
            name: "Writing Challenge",
            type: "Writing",
            price: 5,
            prize: 50,
            status: "approved",
        },
        {
            _id: 3,
            name: "Coding Marathon",
            type: "Coding",
            price: 15,
            prize: 200,
            status: "rejected",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto my-10 p-6 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-green-400">My Created Contests</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Prize</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">Status</th>
                            <th className="px-4 py-3 text-center text-sm font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {contests.map((contest) => (
                            <tr key={contest._id}>
                                <td className="px-4 py-3">{contest.name}</td>
                                <td className="px-4 py-3">{contest.type}</td>
                                <td className="px-4 py-3">${contest.price}</td>
                                <td className="px-4 py-3">${contest.prize}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm font-semibold ${contest.status === "pending"
                                                ? "bg-yellow-500 text-black"
                                            : contest.status === "approved"
                                                    ? "bg-green-500 text-white"
                                                    : "bg-red-500 text-white"
                                            }`}
                                    >
                                        {contest.status.charAt(0).toUpperCase() + contest.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center space-x-2">
                                    <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-sm">
                                        See Submissions
                                    </button>
                                    {contest.status === "pending" && (
                                        <>
                                            <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-white text-sm">
                                                Edit
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white text-sm">
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCreatedContests;
