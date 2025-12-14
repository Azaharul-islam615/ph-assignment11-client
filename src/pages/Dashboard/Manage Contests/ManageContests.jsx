import React from "react";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageContests = () => {
    const axiosSecure = UseaxiosSecure()
    const { data: contests = [], refetch } = useQuery({
        queryKey: ['contest', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest`)
            return res.data
        }
    })
    const updateContest = (contest,status)=>{
        const updateInfo = { status: status,email:contest.email }
        axiosSecure.patch(`/contests/${contest._id}`, updateInfo)
            .then(res => {
                refetch()
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: `${status}`,
                        text: `Contest successfully ${status}`,
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            })

    }
    const handledApproved = (contest)=>{
        updateContest(contest,'approved')
   }
   
    const handleRejection = (contest)=>{
        updateContest(contest,'rejected')
   }
    return (
        <div className="max-w-7xl mx-auto my-10 p-6 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
                Manage Contests
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Type</th>
                            <th className="px-4 py-3 text-left">Creator</th>
                            <th className="px-4 py-3 text-left">Price</th>
                            <th className="px-4 py-3 text-left">Prize</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {contests.map((contest) => (
                            <tr key={contest._id}>
                                <td className="px-4 py-3">{contest.name}</td>
                                <td className="px-4 py-3">{contest.type}</td>
                                <td className="px-4 py-3">{contest.email}</td>
                                <td className="px-4 py-3">${contest.price}</td>
                                <td className="px-4 py-3">${contest.prize}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${contest.status === "pending"
                                                ? "bg-yellow-400 text-black"
                                                : contest.status === "approved"
                                                    ? "bg-green-500 text-white"
                                                    : "bg-red-500 text-white"
                                            }`}
                                    >
                                        {contest.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-center space-x-2">
                                    <button onClick={()=>handledApproved(contest)} className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm">
                                        Confirm
                                    </button>
                                    <button onClick={()=>handleRejection(contest)} className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-sm text-black">
                                        Reject
                                    </button>
                                    <button className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageContests;
