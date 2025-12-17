import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const MyProfile = () => {
    // Static data
    const user = {
        name: "Mehedi Hasan",
        photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        bio: "Creative Designer",
        email: "mehedi@gmail.com"
    };

    const won = 8;
    const participated = 20;

    const data = [
        { name: "Won", value: won },
        { name: "Lost", value: participated - won }
    ];

    const COLORS = ["#4ade80", "#f87171"]; // green for won, red for lost

    return (
        <div className="min-h-screen bg-[#050E3C] text-white flex flex-col items-center py-12 px-4">
            <div className="max-w-3xl w-full bg-[#0C1A4A] p-8 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold mb-6">My Profile</h1>

                
                <div className="flex items-center gap-6 mb-8">
                    <img
                        src={user.photo}
                        alt={user.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
                    />
                    <div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-gray-300">{user.bio}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                    </div>
                </div>

                {/* Update Form */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">Update Info</h2>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-3 rounded-lg bg-[#1F2A63] outline-none text-white"
                            defaultValue={user.name}
                        />
                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="p-3 rounded-lg bg-[#1F2A63] outline-none text-white"
                            defaultValue={user.photo}
                        />
                        <input
                            type="text"
                            placeholder="Bio / Address"
                            className="p-3 rounded-lg bg-[#1F2A63] outline-none text-white"
                            defaultValue={user.bio}
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-bold text-white">
                            Update Profile
                        </button>
                    </form>
                </div>

                {/* Win Percentage Chart */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Win Percentage</h2>
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
