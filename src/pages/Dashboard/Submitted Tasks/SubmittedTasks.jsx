import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";
import { AuthContext } from "../../../Context/Authprovider";
import Swal from "sweetalert2";

const SubmittedTasks = () => {
    const { user } = use(AuthContext)

    const axiosSecure = UseaxiosSecure()
    const {refetch, data: payments = [] } = useQuery({

        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data
        }
    })
    
    const handledWinner = async (payment) => {
        try {
            const res = await axiosSecure.patch(
                `/payments/declare-winner/${payment._id}`,
                { contestId: payment.contestId }
            );

            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Winner Declared 🎉",
                    text: `${payment.userName} is now the contest winner!`,
                    icon: "success",
                    confirmButtonColor: "#22c55e"
                });
                refetch();
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    };

   
    return (
        <div data-aos="fade-up" className="max-w-6xl mx-auto my-10 p-6 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 data-aos="fade-up" className="text-3xl font-bold mb-6 text-green-400">
                <title>payment-successfull-submittedtask</title>
                Submitted Tasks
            </h2>

            <div data-aos="fade-up" className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold">
                                Participant Name
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">
                                Email
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-semibold">
                                Submitted Task
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                        {
                            payments.map((payment, index) => {
                                return (
                                    <tr key={index} className="hover:bg-[#1F2A63] transition">
                                        <td className="px-4 py-3">{payment.userName}</td>
                                        <td className="px-4 py-3">{payment.customerEmail}</td>
                                        <td className="px-4 py-3">
                                            {payment.submittedTask}
                                        </td>
                                        <td className="px-4 py-3 text-center">

                                            <button
                                                onClick={() => handledWinner(payment)}
                                                disabled={payment.isWinner === true}
                                                className={`px-3 py-1 rounded-md text-white text-sm ${payment.isWinner
                                                        ? "bg-gray-500 cursor-not-allowed"
                                                        : "bg-green-500 hover:bg-green-600"}
   `}
                                            >
                                                {payment.isWinner ? "Winner" : "Declare Winner"}
                                            </button>

                                        </td>
                                    </tr>)
                            })
                        }
                        {/* Row 1 */}


                        {/* Row 2 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubmittedTasks;
