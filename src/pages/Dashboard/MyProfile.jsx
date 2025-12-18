import React, { use } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { AuthContext } from "../../Context/Authprovider";
import UseaxiosSecure from "../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyProfile = () => {

    const {user}=use(AuthContext)
    const axiosSecure=UseaxiosSecure()
    const { data: profile = {}, isLoading } = useQuery({
        queryKey: ['profile', user?.email],
     
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/profile/${user.email}`);
            return res.data;
        }
    });



    const { data: stats = {}, isLoading: statsLoading } = useQuery({
        queryKey: ['user-stats', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/stats/${user.email}`);
            return res.data;
        },
       
    });
   

    const won = stats.won || 0;
    const participated = stats.participated || 0;
    const lost = participated - won;

    const winPercentage = participated
        ? Math.round((won / participated) * 100)
        : 0;

    const data = [
        { name: "Won", value: won },
        { name: "Lost", value: participated - won }
    ];

    
    const handledUpdate=async(e)=>{
        e.preventDefault();

        const form = e.target;
        const updatedProfile = {
            displayName: form.name.value,
            photoURL: form.photo.value,
            
            bio: form.bio.value
        };

        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to update your profile?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.patch(
                    `/users/profile/${user.email}`,
                    updatedProfile
                );

                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Profile Updated!',
                        text: 'Your profile has been updated successfully.',
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            }
        });


    }

    // Static data
   

   

    

    const COLORS = ["#4ade80", "#f87171"]; // green for won, red for lost

    return (
        <div data-aos="fade-up" className=" min-h-screen bg-[#050E3C] text-white flex flex-col items-center py-12 px-4">
            <div data-aos="fade-up" className="max-w-3xl w-full bg-[#0C1A4A] p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6">My Profile</h1>

                
                <div data-aos="fade-up" className="flex items-center gap-6 mb-8">
                    <img data-aos="fade-up"
                        src={profile.photoURL}
                        alt={profile.displayName}
                        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                    />
                    <div data-aos="fade-up">
                        <h2 className="text-xl font-bold">{profile.displayName}</h2>
                        <p className="text-gray-300">{profile.bio}</p>
                        <p className="text-gray-400 text-sm">{profile.email}</p>
                    </div>
                </div>

                {/* Update Form */}
                <div data-aos="fade-up" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Update Info</h2>
                    <form onSubmit={handledUpdate} className="flex flex-col gap-4">
                        <input
                        name="name"
                            type="text"
                            placeholder="Name"
                            className="p-3 rounded-lg bg-[#1F2A63] outline-none text-white"
                            defaultValue={profile.displayName}
                        />
                        <input
                            name="photo"
                            type="text"
                            placeholder="Photo URL"
                            className="p-3 rounded-lg bg-[#1F2A63] outline-none text-white"
                            defaultValue={profile.photoURL}
                        />
                        <input
                        name="bio"
                            type="text"
                            placeholder="Bio "
                            className="p-3 rounded-lg bg-[#1F2A63] outline-none text-white"
                            defaultValue={profile.bio}
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-bold text-white">
                            Update Profile
                        </button>
                    </form>
                </div>

                {/* Win Percentage Chart */}
                <div >
                    <h2 data-aos="fade-up" className="text-2xl font-bold mb-4">Win Percentage</h2>
                    <PieChart width={300} height={300}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                    <p className="mt-4 text-gray-300 text-center">
                        Won {won} / Participated {participated}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
