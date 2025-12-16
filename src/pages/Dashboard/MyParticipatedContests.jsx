import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import { AuthContext } from "../../Context/Authprovider";
import UseaxiosSecure from "../../hooks/UseaxiosSecure";

const MyParticipatedContests = () => {
    const {user}=use(AuthContext)
    const axiosSecure = UseaxiosSecure()
    const {data:payments=[]}=useQuery({
        
        queryKey:['payments',user.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payments?email=${user.email}`)
            return res.data
        }
    })
    console.log(payments)
   

    //  Sort by upcoming deadline
    const sortedContests = [...payments].sort(
        (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">
                My Participated Contests
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th>#</th>
                            <th>Contest Name</th>
                            <th>Deadline</th>
                            <th>Amount Paid ($)</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((contest, index) => (
                            <tr key={contest.id}>
                                <td>{index + 1}</td>
                                <td>{contest.contestName}</td>
                                <td>{contest.deadline}</td>
                                <td>{contest.amount}</td>
                                <td>
                                    <span className="badge badge-success">
                                        {contest.paymentStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyParticipatedContests;
