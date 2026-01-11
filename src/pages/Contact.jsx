import React, { use } from "react";
import { AuthContext } from "../Context/Authprovider";

const Contact = () => {
    const {toggle}=use(AuthContext)
    return (
        <section data-aos="fade-up" className={`  py-24`}>
            <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                <title>contestHub-contact</title>
                {/* Left Side – Info */}
                <div data-aos="fade-up" className="space-y-6">
                    <h2 className={`text-4xl ${toggle ? 'text-gray-300 ' : ' text-black'} font-extrabold`}>📞 Contact Us</h2>
                    <p className={`${toggle ? 'text-gray-300 ' : ' text-black'} text-lg`}>
                        Have any questions, feedback, or want to get in touch?
                        We’d love to hear from you!
                        Reach out to us anytime — our support team is active 24/7.
                    </p>

                    <div data-aos="fade-up" className="space-y-4 mt-6">
                        <div>
                            <h3 className="text-xl font-semibold text-indigo-400">📍 Office Address</h3>
                            <p className={`${toggle ? 'text-gray-300 ' : ' text-black'}`}>Dhaka, Bangladesh</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-400">📧 Email</h3>
                            <p className={`${toggle ? 'text-gray-300 ' : ' text-black'}`}>support@contesthub.com</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-indigo-400">📞 Phone</h3>
                            <p className={`${toggle ? 'text-gray-300 ' : ' text-black'}`}>+880 1234-567890</p>
                        </div>
                    </div>
                </div>

                {/* Right Side – Contact Form */}
                <div data-aos="fade-up" className="bg-[#0C1A4A] p-8 rounded-2xl shadow-xl">
                    <h3 className={`text-2xl ${toggle ? 'text-white ' : ' text-white'} font-bold mb-6`}>Send Us a Message</h3>

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
