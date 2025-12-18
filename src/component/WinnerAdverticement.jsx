import {React,use} from 'react';
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Context/Authprovider';

const WinnerAdvertisement = () => {
    const {toggle}=use(AuthContext)
    
    const axiosSecure = UseAxiosSecure()
    const { refetch, data: payments = [] } = useQuery({

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
        <section data-aos="fade-up" className={` ${toggle ? 'bg-[#050E3C]' : 'bg-white text-black'} py-16 text-white`}>
            <div data-aos="fade-up" className="max-w-6xl mx-auto px-4 text-center">

                {/* Section Title */}
                <h2 data-aos="fade-up" className={`text-4xl font-bold ${toggle ? 'text-white' : 'text-black'} mb-4`}>
                    Recent Winners
                </h2>
                <p data-aos="fade-up" className={`mb-12  ${toggle ?'text-gray-300':'text-black'} text-[18px] mx-auto`}>
                    Our talented participants are achieving great things every day! <br />
                    Check out some of our recent winners and get <br /> inspired to join the next contest.
                </p>

                {/* Stats */}
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div data-aos="fade-up" className="bg-white shadow-md rounded-xl p-6">
                        <h3 data-aos="fade-up" className="text-3xl font-bold text-indigo-600">{winnerCount}+</h3>
                        <p data-aos="fade-up" className="text-gray-700 font-medium">Recent Winners</p>
                    </div>

                    <div data-aos="fade-up" className="bg-white shadow-md rounded-xl p-6">
                        <h3 data-aos="fade-up" className="text-3xl font-bold text-indigo-600">{totalPrizeMoney}+</h3>
                        <p data-aos="fade-up" className="text-gray-700 font-medium">Total Prize Money</p>
                    </div>

                    <div data-aos="fade-up" className="bg-white shadow-md rounded-xl p-6">
                        <h3 data-aos="fade-up" className="text-3xl font-bold text-indigo-600">{payments.length}+</h3>
                        <p data-aos="fade-up" className="text-gray-700 font-medium">Total Participation</p>
                    </div>
                </div>

                {/* Winner Cards */}
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {payments
                        .filter(winner => winner.isWinner)  // শুধু winner ফিল্টার
                        .map((winner, idx) => (
                            <div data-aos="fade-up" key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <img data-aos="fade-up"  src={winner.image} className="object-bottom  w-full h-48 " alt={winner.name} />
                                <div data-aos="fade-up" className="p-6 text-left">
                                    <h3 data-aos="fade-up" className="text-lg font-bold text-black">{winner.userName}</h3>
                                    <p data-aos="fade-up" className="text-gray-700 text-sm mt-1">Won: {winner.contestName}</p>
                                    <p data-aos="fade-up" className="text-indigo-600 font-bold mt-2">{winner.prize}</p>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Button */}
                

            </div>
        </section>
    );
};

export default WinnerAdvertisement;
