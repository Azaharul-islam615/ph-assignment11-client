import { useQuery } from "@tanstack/react-query";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import UseaxiosSecure from "../hooks/UseaxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/Authprovider";

/* 🔹 Countdown Helper Function */
const calculateTimeLeft = (deadline) => {
    const diff = new Date(deadline) - new Date();
    if (diff <= 0) return null;
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

const ContestDetails = () => {
    const [openModal, setOpenModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [taskLink, setTaskLink] = useState("");

    const { id } = useParams();
    const { user } = use(AuthContext)

    const axiosSecure = UseaxiosSecure();

    const { data: contest } = useQuery({
        queryKey: ["contest", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest/${id}`);
            return res.data;
        },
    });

    const { data: winners = [] } = useQuery({
        queryKey: ["public-winners"],
        queryFn: async () => {
            const res = await axiosSecure.get("/public-winners");
            return res.data;
        },
    });

    const winner = winners.find(w => w.contestId === id)

    useEffect(() => {
        if (!contest?.deadline) return;
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(contest.deadline));
        }, 1000);
        return () => clearInterval(timer);
    }, [contest]);

    const isContestEnded = !timeLeft;

    const handled = async (contest) => {
        const paymentInfo = {
            price: contest.price,
            contestId: contest._id,
            customer_email: user.email,
            name: contest.name,
            prize: contest.prize,
            deadline: contest.deadline,
            userName: user.displayName,
            image: user.photoURL
        };
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
        window.location.assign(res.data.url);
    };

    // 🔹 Submit task function
    const submitTask = async () => {
        if (!taskLink) return alert("Please submit a link");

        try {

            const paymentsRes = await axiosSecure.get(`/payments?email=${user.email}`);
            const paymentRecord = paymentsRes.data.find(p => p.contestId === contest._id);

            if (!paymentRecord) return alert("Payment not found!");


            await axiosSecure.patch(`/payments/${paymentRecord._id}`, {
                submittedTask: taskLink,

            });

            Swal.fire({
                icon: 'success',
                title: 'Task Submitted!',
                text: 'Your task has been submitted successfully.',
                confirmButtonText: 'OK',
                confirmButtonColor: '#22c55e'
            });
            setOpenModal(false);
            setTaskLink("");
        } catch (error) {
            console.error(error);
            alert("Failed to submit task");
        }
    };

    return (
        <div data-aos="fade-up" className=" text-white min-h-screen py-24">
            <title>contestHub-contestDelails</title>
            <div data-aos="fade-up" className="max-w-5xl mx-auto px-4">
                <h1  className="text-4xl font-extrabold mb-4">{contest?.name}</h1>
                <img  src={contest?.image} className="w-full h-72 object-cover rounded-xl shadow-lg" alt="Contest Banner" />

                {/* Stats */}
                <div data-aos="fade-up" className="mt-6 bg-[#0C1A4A] p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div >
                        <p  className="text-gray-300">Participants</p>
                        <h2  className="text-3xl font-bold">{contest?.participants}</h2>
                    </div>
                    <div >
                        <p  className="text-gray-300">Prize Money</p>
                        <h2  className="text-3xl font-bold text-indigo-400">{contest?.prize}</h2>
                    </div>
                    <div>
                        <p  className="text-gray-300">Deadline</p>
                        {timeLeft ? (
                            <h2  className="text-xl font-bold text-red-400">
                                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                            </h2>
                        ) : (
                            <h2  className="text-2xl font-bold text-red-600">Contest Ended</h2>
                        )}
                    </div>
                </div>

                {/* Buttons */}
                <div data-aos="fade-up" className="mt-8 flex flex-col md:flex-row gap-4">
                    {
                        user && <>
                            <button  onClick={() => handled(contest)}
                                disabled={isContestEnded}
                                className={`px-6 py-3 rounded-xl font-bold ${isContestEnded ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"}`}
                            >
                                {isContestEnded ? "Contest Ended" : "Register / Pay"}
                            </button>
                        </>
                    }

                    {
                        winner?.paymentStatus === 'paid' && <button 
                            disabled={isContestEnded}
                            onClick={() => setOpenModal(true)}
                            className={`px-6 py-3 rounded-xl font-bold ${isContestEnded ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
                        >
                            Submit Task
                        </button>
                    }
                </div>

                {/* Description */}
                <div data-aos="fade-up" className="mt-10 bg-[#0C1A4A] p-6 rounded-xl">
                    <h2  className="text-2xl font-bold mb-3">📝 Contest Description</h2>
                    <p  className="text-gray-300 leading-7">{contest?.description}</p>

                    <h2  className="text-2xl font-bold mt-6 mb-3">📌 Task Details</h2>
                    <p  className="text-gray-300 leading-7">{contest?.taskInstruction}</p>
                </div>
            </div>

            {/* Modal for Submit Task */}
            {openModal && !isContestEnded && (
                <div data-aos="fade-up" className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center px-4">
                    <div data-aos="fade-up" className="bg-[#0C1A4A] p-6 rounded-xl max-w-lg w-full">
                        <h2 data-aos="fade-up" className="text-2xl font-bold mb-3">Submit Your Task</h2>

                        <textarea data-aos="fade-up"
                            rows="5"
                            placeholder="Paste your link here..."
                            value={taskLink}
                            onChange={(e) => setTaskLink(e.target.value)}
                            className="w-full p-3 rounded-lg text-white bg-[#1F2A63] outline-none"
                        />

                        <div data-aos="fade-up" className="flex justify-end mt-4 gap-3">
                            <button data-aos="fade-up"
                                className="px-5 py-2 bg-gray-500 rounded-lg"
                                onClick={() => setOpenModal(false)}
                            >
                                Cancel
                            </button>
                            <button data-aos="fade-up"
                                className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
                                onClick={submitTask}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 🏆 Winner Section (Static Design) */}
            {
                winner && <div data-aos="fade-up" className=" md:w-[1000px] mx-auto mt-10 bg-[#0C1A4A] p-6 rounded-xl">
                    <h2 className="text-2xl  font-bold mb-4 text-yellow-400 flex items-center gap-2">
                        🏆 Contest Winner
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Winner Image */}
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                            <img
                                src={winner.image}
                                alt="Winner"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Winner Info */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white">
                                {winner?.userName}
                            </h3>
                            <p className="text-gray-300 mt-1">
                                Winner of <span className="text-indigo-400 font-semibold">{winner?.userName}</span>
                            </p>

                            <p className="mt-2 text-green-400 font-semibold">
                                🎉 Prize Won: ${winner?.prizeMoney}
                            </p>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default ContestDetails;
