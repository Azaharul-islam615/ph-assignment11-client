import React from "react";

const Contact = () => {
    return (
        <section className=" text-white py-16">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Side – Info */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-extrabold">📞 Contact Us</h2>
                    <p className="text-gray-300 text-lg">
                        Have any questions, feedback, or want to get in touch?
                        We’d love to hear from you!
                        Reach out to us anytime — our support team is active 24/7.
                    </p>

                    <div className="space-y-4 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-400">📍 Office Address</h3>
                            <p className="text-gray-300">Dhaka, Bangladesh</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-400">📧 Email</h3>
                            <p className="text-gray-300">support@contesthub.com</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-400">📞 Phone</h3>
                            <p className="text-gray-300">+880 1234-567890</p>
                        </div>
                    </div>
                </div>

                {/* Right Side – Contact Form */}
                <div className="bg-[#0C1A4A] p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

                    <form className="space-y-5">
                        <div>
                            <label className="block mb-2 text-gray-300">Your Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-[#1F2A63] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-300">Your Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-[#1F2A63] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Enter email address"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-gray-300">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-[#1F2A63] text-white outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
