import React from "react";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
    // ---------------- Overview Cards Data ----------------
    const overview = [
        { title: "Total Users", value: 6, bg: "bg-blue-500" },
        { title: "Total Contests", value: 15, bg: "bg-green-500" },
        { title: "Total Revenue", value: "$1,000", bg: "bg-yellow-500" },
    ];

    // ---------------- Chart Data ----------------
    const barData = [
        { month: "Jan", users: 50 },
        { month: "Feb", users: 75 },
        { month: "Mar", users: 150 },
        { month: "Apr", users: 100 },
        { month: "May", users: 200 },
        { month: "Jun", users: 175 },
    ];

    const lineData = [
        { week: "Week 1", contests: 5 },
        { week: "Week 2", contests: 10 },
        { week: "Week 3", contests: 8 },
        { week: "Week 4", contests: 12 },
    ];

    const pieData = [
        { name: "Design", value: 30, color: "#3B82F6" },
        { name: "Writing", value: 25, color: "#10B981" },
        { name: "Coding", value: 25, color: "#EAB308" },
    ];

    // ---------------- Table Data ----------------
    const tableData = [
        { name: "John Doe", email: "john@example.com", role: "User" },
        { name: "Md.Azaharul", email: "azaharul@gmail.com", role: "Admin" },
        { name: "Junayed Ahmmed", email: "junayedahmmed@gmail.com", role: "Creator" },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Actionable Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {overview.map((item) => (
                    <div
                        key={item.title}
                        className={`${item.bg} text-white rounded-lg p-6 shadow-md`}
                    >
                        <h2 className="text-lg font-semibold">{item.title}+</h2>
                        <p className="text-2xl font-bold mt-2">{item.value}+</p>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Bar Chart */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">User Growth (Bar Chart)</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={barData}>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="users" fill="#3B82F6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Line Chart */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">Contests (Line Chart)</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={lineData}>
                            <XAxis dataKey="week" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="contests"
                                stroke="#22C55E"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="font-semibold mb-2">Contest Type (Pie Chart)</h3>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                label
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-4">Users Table</h3>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b p-2">Name</th>
                            <th className="border-b p-2">Email</th>
                            <th className="border-b p-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((user, idx) => (
                            <tr key={idx} className="hover:bg-gray-100">
                                <td className="border-b p-2">{user.name}</td>
                                <td className="border-b p-2">{user.email}</td>
                                <td className="border-b p-2">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
