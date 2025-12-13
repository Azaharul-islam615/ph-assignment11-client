import React from "react";

const SubmittedTasks = () => {
    return (
        <div className="max-w-6xl mx-auto my-10 p-6 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-green-400">
                Submitted Tasks
            </h2>

            <div className="overflow-x-auto">
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
                        {/* Row 1 */}
                        <tr className="hover:bg-[#1F2A63] transition">
                            <td className="px-4 py-3">Rahim Uddin</td>
                            <td className="px-4 py-3">rahim@gmail.com</td>
                            <td className="px-4 py-3">
                                Modern logo design submitted as PNG file
                            </td>
                            <td className="px-4 py-3 text-center">
                                <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-white text-sm">
                                    Declare Winner
                                </button>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="hover:bg-[#1F2A63] transition">
                            <td className="px-4 py-3">Karim Ahmed</td>
                            <td className="px-4 py-3">karim@gmail.com</td>
                            <td className="px-4 py-3">
                                Creative banner design using Figma
                            </td>
                            <td className="px-4 py-3 text-center">
                                <button className="bg-gray-500 cursor-not-allowed px-3 py-1 rounded-md text-white text-sm">
                                    Winner Declared
                                </button>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="hover:bg-[#1F2A63] transition">
                            <td className="px-4 py-3">Ayesha Khan</td>
                            <td className="px-4 py-3">ayesha@gmail.com</td>
                            <td className="px-4 py-3">
                                JavaScript solution submitted via GitHub
                            </td>
                            <td className="px-4 py-3 text-center">
                                <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-white text-sm">
                                    Declare Winner
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SubmittedTasks;
