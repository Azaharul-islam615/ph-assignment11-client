import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";
import { Link } from "react-router";
import { AuthContext } from "../../../Context/Authprovider";
import Swal from "sweetalert2";

const MyCreatedContests = () => {
   const {user}=use(AuthContext)
    const axiosSecure=UseaxiosSecure()
    const {data:contests=[],refetch}=useQuery({
        queryKey: ['contest', 'pending'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/contest?email=${user.email}`)
            return res.data
        }
    })
    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This contest will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/contest/${id}`);
                Swal.fire("Deleted!", "Contest has been deleted.", "success");
                refetch(); 

                
            }
        });
    };

    
   

    return (
        <div data-aos="fade-up" className="max-w-6xl mx-auto my-10 p-6 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-green-400">My Created Contests</h2>
            

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
                                    <Link to="/dashboard/submittedTask" className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-white text-sm">
                                        See Submissions
                                    </Link>
                                    {contest.status === "pending" && (
                                        <>
                                            <Link to={`/dashboard/editcontest/${contest._id}`} className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-white text-sm">
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(contest._id)} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white text-sm">
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
