import React from "react";

const EditContest = () => {
    return (
        <div className="max-w-3xl mx-auto my-12 p-8 bg-[#0C1A4A] text-white rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-extrabold mb-6 text-yellow-400">
                Edit Contest
            </h2>

            <form className="space-y-6">

                {/* Contest Name */}
                <div>
                    <label className="block mb-2 text-gray-300">Contest Name</label>
                    <input
                        type="text"
                        defaultValue="Logo Design Challenge"
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 text-gray-300">Description</label>
                    <textarea
                        rows="4"
                        defaultValue="Design a modern logo for a startup brand."
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                    ></textarea>
                </div>

                {/* Price & Prize */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Price</label>
                        <input
                            type="number"
                            defaultValue="500"
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Prize Money</label>
                        <input
                            type="number"
                            defaultValue="5000"
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        />
                    </div>
                </div>

                {/* Task Instruction */}
                <div>
                    <label className="block mb-2 text-gray-300">Task Instruction</label>
                    <textarea
                        rows="3"
                        defaultValue="Submit your logo in PNG format."
                        className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                    ></textarea>
                </div>

                {/* Contest Type & Deadline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Contest Type</label>
                        <select
                            defaultValue="design"
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        >
                            <option>Design</option>
                            <option>Writing</option>
                            <option>Coding</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-300">Deadline</label>
                        <input
                            type="text"
                            defaultValue="31 Dec 2025, 11:59 PM"
                            className="w-full p-3 rounded-lg bg-[#1F2A63] text-white outline-none"
                        />
                    </div>
                </div>

                {/* Update Button */}
                <button
                    type="button"
                    className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 rounded-lg font-bold text-lg transition"
                >
                    Update Contest
                </button>
            </form>
        </div>
    );
};

export default EditContest;
