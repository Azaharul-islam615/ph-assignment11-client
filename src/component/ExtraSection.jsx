import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/Authprovider";

const ExtraSection = () => {
    const {toggle}=use(AuthContext)
    return (
        <section className={`${toggle ?   'bg-white text-black':'bg - indigo - 50'}  py-16`}>
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Section Title */}
                <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">
                    Why Join ContestHub?
                </h2>
                <p className={`${toggle ? 'text-gray-600' : 'text-gray-300'} mb-12 max-w-3xl mx-auto`}>
                    ContestHub is the perfect place to showcase your creativity, learn new skills, and win exciting prizes. Join contests, challenge yourself, and become part of our growing community of talented participants.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Creative Contests</h3>
                        <p className="text-gray-600">
                            Participate in a variety of contests including design, writing, photography, and more.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Win Exciting Prizes</h3>
                        <p className="text-gray-600">
                            Earn recognition and win cash prizes or rewards for your creativity and skill.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-xl font-bold text-indigo-600 mb-2">Connect & Learn</h3>
                        <p className="text-gray-600">
                            Network with other creative minds and learn from top participants and winners.
                        </p>
                    </div>

                </div>

                {/* CTA Button */}
                <div className="mt-12">
                    <Link
                        to="/allcontest"
                        className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition"
                    >
                        Explore All Contests
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ExtraSection;
