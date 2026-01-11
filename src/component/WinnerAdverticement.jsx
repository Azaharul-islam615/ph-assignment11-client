import { React, use } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Context/Authprovider';

const WinnerAdvertisement = () => {
    const { toggle } = use(AuthContext)

    // Intersection Observer for triggering animations when in view
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true, // Only trigger once when first comes into view
    });

    const axiosSecure = UseAxiosSecure()
    const { data: payments = [] } = useQuery({

        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/public-winners`)
            return res.data
        }
    })
    const totalPrizeMoney = payments.reduce((sum, payment) => {
        return sum + (payment.prizeMoney || 0);

    }, 0);
    const winnerCount = payments.filter(payment => payment.isWinner).length;

    return (
        <section data-aos="fade-up" className={`  pt-16 text-white`}>
            <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 text-center">

                {/* Section Title */}
                <h2 data-aos="fade-up" className={`text-4xl font-bold ${toggle ? 'text-white' : 'text-black'} mb-4`}>
                    Recent Winners
                </h2>
                <p data-aos="fade-up" className={`mb-12  ${toggle ? 'text-gray-300' : 'text-black'} text-[20px] mx-auto`}>
                    Our talented participants are achieving great things every day! <br />
                    Check out some of our recent winners and get <br /> inspired to join the next contest.
                </p>

                {/* Stats */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={winnerCount}
                                    duration={2.5}
                                    separator=","
                                />
                            ) : (
                                '0'
                            )}
                            +
                        </h3>
                        <p className="text-gray-700 font-semibold text-lg">Recent Winners</p>
                        <p className="text-gray-500 text-sm mt-1">Talented creators who achieved success</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-green-600 mb-2">
                            $
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={totalPrizeMoney}
                                    duration={3}
                                    separator=","
                                />
                            ) : (
                                '0'
                            )}
                            +
                        </h3>
                        <p className="text-gray-700 font-semibold text-lg">Total Prize Money</p>
                        <p className="text-gray-500 text-sm mt-1">Distributed to our winners</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300 border border-gray-100">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-4xl font-bold text-blue-600 mb-2">
                            {inView ? (
                                <CountUp
                                    start={0}
                                    end={payments.length}
                                    duration={2}
                                    separator=","
                                />
                            ) : (
                                '0'
                            )}
                            +
                        </h3>
                        <p className="text-gray-700 font-semibold text-lg">Total Participants</p>
                        <p className="text-gray-500 text-sm mt-1">Active community members</p>
                    </div>
                </div>

                {/* Winner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {payments
                        .filter(winner => winner.isWinner)  
                        .map((winner, idx) => (
                            <div key={idx} className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border border-gray-100">
                                {/* Winner Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        WINNER
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={winner.image}
                                        className="w-full h-46 object-bottom  group-hover:scale-110 transition-transform duration-500"
                                        alt={winner.userName}
                                        onError={(e) => {
                                            e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(winner.userName) + "&background=6366f1&color=fff&size=400";
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    {/* Winner Name */}
                                    <div className="flex items-center mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white font-bold text-lg">
                                                {winner.userName?.charAt(0)?.toUpperCase() || 'W'}
                                            </span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                {winner.userName}
                                            </h3>
                                            <p className="text-gray-500 text-sm">Contest Champion</p>
                                        </div>
                                    </div>

                                    {/* Contest Info */}
                                    <div className="mb-4">
                                        <div className="flex items-center mb-2">
                                            <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                            <span className="text-gray-700 font-medium text-sm">Won Contest:</span>
                                        </div>
                                        <p className="text-gray-800 font-semibold ml-6">{winner.contestName}</p>
                                    </div>

                                    {/* Prize Section */}
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-green-600 text-sm font-medium">Prize Won</p>
                                                    <p className="text-green-800 font-bold text-lg">{winner.prizeMoney}</p>
                                                </div>
                                            </div>
                                            <div className="text-green-600">
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Achievement Date */}
                                    <div className="mt-4  border-t border-gray-100">
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span>Achievement Date</span>
                                            </div>
                                            <span className="font-medium">
                                                {winner.winnerDeclaredAt ? new Date(winner.winnerDeclaredAt).toLocaleDateString() : 'Recent'}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect Border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        ))}
                </div>

                {/* Button */}


            </div>
        </section>
    );
};

export default WinnerAdvertisement;
