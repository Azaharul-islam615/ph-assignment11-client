import React from 'react';

const WinnerAdvertisement = () => {
    return (
        <section className="bg-[#050E3C] py-16 text-white">
            <div className="max-w-6xl mx-auto px-4 text-center">

                {/* Section Title */}
                <h2 className="text-4xl font-bold text-white mb-4">
                    Recent Winners
                </h2>
                <p className=" mb-12 text-gray-300 text-[18px] mx-auto">
                    Our talented participants are achieving great things every day! <br />
                    Check out some of our recent winners and get <br /> inspired to join the next contest.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h3 className="text-3xl font-bold text-indigo-600">25+</h3>
                        <p className="text-gray-700 font-medium">Recent Winners</p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h3 className="text-3xl font-bold text-indigo-600">$12,000+</h3>
                        <p className="text-gray-700 font-medium">Total Prize Money</p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
                        <p className="text-gray-700 font-medium">Total Participation</p>
                    </div>
                </div>

                {/* Winner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Mehedi Hasan",
                            contest: "Graphic Design Contest",
                            prize: "$500 Prize",
                            img: "https://images.unsplash.com/photo-1581091012184-5c1d56c154ec?auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            name: "Fatema Akter",
                            contest: "Photography Challenge",
                            prize: "$350 Prize",
                            img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=60"
                        },
                        {
                            name: "Rakib Chowdhury",
                            contest: "Writing Competition",
                            prize: "$250 Prize",
                            img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=60"
                        }
                    ].map((winner, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img src={winner.img} className="w-full h-48 object-cover" alt={winner.name} />
                            <div className="p-6 text-left">
                                <h3 className="text-lg font-bold text-black">{winner.name}</h3>
                                <p className="text-gray-700 text-sm mt-1">Won: {winner.contest}</p>
                                <p className="text-indigo-600 font-bold mt-2">{winner.prize}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-12">
                    <button className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition">
                        View All Winners
                    </button>
                </div>

            </div>
        </section>
    );
};

export default WinnerAdvertisement;
