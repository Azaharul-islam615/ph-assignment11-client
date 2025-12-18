import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";
import Swal from "sweetalert2";

const EditContest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = UseaxiosSecure();

    // React Hook Form
    const { register, handleSubmit, reset } = useForm();

    // Fetch contest data
    const { data: contest, isLoading } = useQuery({
        queryKey: ["contest", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest/${id}`);
            return res.data;
        },
        onSuccess: (data) => {
            // populate form with default values
            reset({
                name: data.name || "",
                description: data.description || "",
                price: data.price || "",
                prize: data.prize || "",
                taskInstruction: data.taskInstruction || "",
                type: data.type || "design",
                deadline: data.deadline
                    ? new Date(data.deadline).toISOString().slice(0, 16)
                    : "",
            });
        },
    });

    // Update handler
    const onSubmit = async (data) => {
        try {
            const res = await axiosSecure.patch(`/contest/${id}`, data);
            if (res.data.modifiedCount || res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Contest Updated",
                    text: "Your contest has been updated successfully!",
                    timer: 2000,
                    showConfirmButton: false,
                });
                navigate("/dashboard/mycreatedcontest"); 
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "Something went wrong!",
            });
        }
    };

    if (isLoading) return <p className="text-center text-white">Loading...</p>;
    if (!contest) return <p className="text-center text-white">Contest not found!</p>;

    return (
        <div data-aos="fade-up" className="max-w-3xl mx-auto my-12 p-8 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 data-aos="fade-up" className="text-3xl font-extrabold mb-6 text-yellow-400">
                <title>contestHub-editecontest</title>
                Edit Contest
            </h2>

            <form data-aos="fade-up" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Contest Name */}
                <div>
                    <label className="block mb-2 text-gray-300">Contest Name</label>
                    <input
                        type="text"
                        defaultValue={contest.name}
                        {...register("name")}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 text-gray-300">Description</label>
                    <textarea defaultValue={contest.description}
                        rows="4"
                        {...register("description")}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                    ></textarea>
                </div>

                {/* Price & Prize */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Price</label>
                        <input
                        defaultValue={contest.price}
                            type="number"
                            {...register("price")}
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Prize Money</label>
                        <input defaultValue={contest.prize}
                            type="number"
                            {...register("prize")}
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        />
                    </div>
                </div>

                {/* Task Instruction */}
                <div>
                    <label className="block mb-2 text-gray-300">Task Instruction</label>
                    <textarea defaultValue={contest.
                        taskInstruction}
                        rows="3"
                        {...register("taskInstruction")}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                    ></textarea>
                </div>

                {/* Contest Type & Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Contest Type</label>
                        <select
                            {...register("type")}
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        >
                            <option value="design">Design</option>
                            <option value="writing">Writing</option>
                            <option value="coding">Coding</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-300">Deadline</label>
                        <input
                            type="datetime-local"
                            {...register("deadline")}
                            defaultValue={
                                contest?.deadline
                                    ? new Date(contest.deadline).toISOString().slice(0, 16)
                                    : ""
                            }
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        />
                    </div>
                </div>

                {/* Update Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-lg font-bold text-lg transition"
                >
                    Update Contest
                </button>
            </form>
        </div>
    );
};

export default EditContest;
