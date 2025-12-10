import React, { useState } from "react";

const ContestDetails = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="bg-[#050E3C] text-white min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4">

                {/* Contest Title */}
                <h1 className="text-4xl font-extrabold mb-4">
                    Logo Design Championship 2025
                </h1>

                {/* Banner Image */}
                <img
                    src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80"
                    className="w-full h-72 object-cover rounded-xl shadow-lg"
                    alt="Contest Banner"
                />

                {/* Stats */}
                <div className="mt-6 bg-[#0C1A4A] p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-gray-300">Participants</p>
                        <h2 className="text-3xl font-bold">120</h2>
                    </div>

                    <div>
                        <p className="text-gray-300">Prize Money</p>
                        <h2 className="text-3xl font-bold text-indigo-400">$500</h2>
                    </div>

                    <div>
                        <p className="text-gray-300">Deadline</p>
                        <h2 className="text-3xl font-bold text-red-400">
                            02 Days 14 Hours
                        </h2>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold">
                        Register / Pay
                    </button>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl font-bold"
                    >
                        Submit Task
                    </button>
                </div>

                {/* Description */}
                <div className="mt-10 bg-[#0C1A4A] p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-3">📝 Contest Description</h2>
                    <p className="text-gray-300 leading-7">
                        This contest focuses on creating a minimalistic, modern logo that
                        reflects creativity and innovation. Participants must submit their
                        original work. Any plagiarism will result in disqualification.
                        Make sure your logo aligns with the theme provided by the admin.
                    </p>

                    <h2 className="text-2xl font-bold mt-6 mb-3">📌 Task Details</h2>
                    <p className="text-gray-300 leading-7">
                        You need to create a clean vector logo in PNG/SVG format. Upload
                        the design link (Drive/Dropbox/Figma). Judges will evaluate based
                        on creativity, uniqueness, and theme match.
                    </p>
                </div>

                {/* Winner Section */}
                <div className="mt-10 bg-[#0C1A4A] p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">🏆 Winner</h2>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                            className="w-20 h-20 rounded-full object-cover"
                            alt="Winner"
                        />
                        <div>
                            <h3 className="text-xl font-bold">Mehedi Hasan</h3>
                            <p className="text-gray-300 text-sm">Winner of Logo Design Contest</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Submit Task */}
            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center px-4">
                    <div className="bg-[#0C1A4A] p-6 rounded-xl max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-3">Submit Your Task</h2>
                        <textarea
                            rows="5"
                            placeholder="Paste your link here..."
                            className="w-full p-3 rounded-lg text-white bg-[#1F2A63] outline-none"
                        ></textarea>

                        <div className="flex justify-end mt-4 gap-3">
                            <button
                                className="px-5 py-2 bg-gray-500 rounded-lg"
                                onClick={() => setOpenModal(false)}
                            >
                                Cancel
                            </button>
                            <button className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContestDetails;
