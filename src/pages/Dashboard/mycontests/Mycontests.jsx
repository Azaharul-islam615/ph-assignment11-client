import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import axios from "axios";
import UseaxiosSecure from "../../../hooks/UseaxiosSecure";
import { AuthContext } from "../../../Context/Authprovider";


const Mycontests = () => {
    const {user}=use(AuthContext)
    const { register, handleSubmit, 
        formState: { errors },
         reset } = useForm();
    const [deadline, setDeadline] = useState(new Date());
   
const axiosSecure=UseaxiosSecure()
    const onSubmit =async (data) => {
        const profileImage = data.photo[0]
       
        const formData = new FormData()
        formData.append("image", profileImage)
        const ImageUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host}`
  
        
        const imgRes =await axios.post(ImageUrl, formData)
       

        const image = imgRes.data.data.url;

        const contestData = {
            email: data.email,
            name: data.name,
            description: data.description,
            price: data.price,
            prize: data.prize,
            taskInstruction: data.taskInstruction,
            type: data.type,
            deadline: deadline,
            image: image,
            status: "pending",
            createdAt: new Date()
        };
        axiosSecure.post('/contest',contestData)
        .then(res=>{
            console.log(res)
            if(res.data.insertedId){
                Swal.fire({
                    icon: "success",
                    title: "Contest Added!",
                    text: "Your contest has been submitted successfully and is pending approval.",
                    showConfirmButton: false,
                    timer: 1800,
                });

            }
        })

       reset()
     
    };

  

    return (
        <div data-aos="fade-up" className="max-w-3xl mx-auto my-12 p-8 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 data-aos="fade-up" className="text-3xl font-extrabold mb-6 text-green-400">Add New Contest</h2>
            <title>contestHub-mycontest</title>
            <form data-aos="fade-up" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block mb-2 font-medium text-gray-300">Creator Email</label>
                    <input
                    defaultValue={user.email}
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Enter creator email"
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-sm">email is required</p>}
                </div>
                {/* Contest Name */}
                <div>
                    <label className="block mb-2 font-medium text-gray-300">Contest Name</label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Enter contest name"
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-sm">Name is required</p>}
                </div>

                {/* Image */}
                <div>
                    <label className="block mb-2 font-medium text-gray-300">Contest Image</label>
                    <input type="file" {...register("photo", { required: true })} className=" bg-[#0A102F] file-input w-full  mb-1 p-2 border border-gray-300 rounded-md outline-none" />
                    {errors.photo?.type === "required" && (
                        <p className="text-red-500 text-sm">photo is required</p>
                    )}
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 font-medium text-gray-300">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Enter contest description"
                        rows={4}
                    />
                    {errors.description && <p className="text-red-500 mt-1 text-sm">Description is required</p>}
                </div>

                {/* Price and Prize Money */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-300">Price (Participation Fee)</label>
                        <input
                            type="number"
                            {...register("price", { required: true, min: 0 })}
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Enter price"
                        />
                        {errors.price && <p className="text-red-500 mt-1 text-sm">Price is required</p>}
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-300">Prize Money</label>
                        <input
                            type="number"
                            {...register("prize", { required: true, min: 0 })}
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                            placeholder="Enter prize money"
                        />
                        {errors.prize && <p className="text-red-500 mt-1 text-sm">Prize is required</p>}
                    </div>
                </div>

                {/* Task Instructions */}
                <div>
                    <label className="block mb-2 font-medium text-gray-300">Task Instructions</label>
                    <textarea
                        {...register("taskInstruction", { required: true })}
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        placeholder="Describe the task"
                        rows={3}
                    />
                    {errors.taskInstruction && <p className="text-red-500 mt-1 text-sm">Task instruction is required</p>}
                </div>

                {/* Contest Type and Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 font-medium text-gray-300">Contest Type</label>
                        <select
                            {...register("type", { required: true })}
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        >
                            <option value="">Select type</option>
                            <option value="design">Design</option>
                            <option value="writing">Writing</option>
                            <option value="coding">Coding</option>
                        </select>
                        {errors.type && <p className="text-red-500 mt-1 text-sm">Contest type is required</p>}
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-300">Deadline</label>
                        <DatePicker
                            selected={deadline}
                            onChange={(date) => setDeadline(date)}
                            showTimeSelect
                            dateFormat="Pp"
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-lg font-bold text-lg shadow-md transition-all duration-300"
                >
                    Add Contest
                </button>
            </form>
        </div>
    );
};

export default Mycontests;
