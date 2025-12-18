import React, { useState } from "react";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const ManageContests = () => {
    const limit=10
    const [total,setTotal]=useState(0)
    const [totalpage,setTotalpage]=useState(0)
    const [currentpage,setCurrentpage]=useState(0)
    const axiosSecure = UseaxiosSecure()
    const { data: contests = [], refetch } = useQuery({
        queryKey: ['contest', 'pending',currentpage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pagination?limit=${limit}&skip=${currentpage*limit}`)
            setTotal(res.data.total)
            const page = Math.ceil(res.data.total / limit) 
            setTotalpage(page)
            return res.data.result
        }
    })
    console.log(totalpage)
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
   const hanldeledDelete=(contest)=>{
       axiosSecure.delete(`/contest/${contest._id}`)
           .then(res => {
               if (res.data.deletedCount > 0){
                   refetch()

                   Swal.fire({
                       icon: "success",
                       title: `${status}`,
                       text: `Contest delete successfully`,
                       timer: 1500,
                       showConfirmButton: false,
                   });
               }
              
               })
           

   }
    return (
        <div data-aos="fade-up" className="max-w-7xl mx-auto my-10 p-6 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-green-400">
                <title>contestHub-managecontest</title>
                Manage Contests
            </h2>

            <div data-aos="fade-up" className="overflow-x-auto">
                <table data-aos="fade-up" className="min-w-full divide-y divide-gray-700">
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
                                    <button onClick={()=>hanldeledDelete(contest)} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-3 mt-7">
                {currentpage > 0 && <button onClick={() => setCurrentpage(currentpage - 1)} className="btn py-2 px-2 text-lg">   prev <FaLongArrowAltRight /></button>
                }
             
                {
                    [...Array(totalpage).keys()].map(i=>(
                        <button onClick={() => setCurrentpage(i)} className={`btn text-lg ${i===currentpage && 'bg-purple-700 text-white'}`}>{i}</button>

                    ))
                    }
                    {
                    currentpage < totalpage-1 && <button onClick={() => setCurrentpage(currentpage + 1)} className="btn  p-2 text-lg"><FaLongArrowAltLeft></FaLongArrowAltLeft>Next</button>
                    }
               
            </div>
        </div>
    );
};

export default ManageContests;
