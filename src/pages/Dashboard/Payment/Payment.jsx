import React from 'react';
import { useParams } from 'react-router';
import UseaxiosSecure from '../../../hooks/UseaxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const { contestId } = useParams()

    const axiosSecure = UseaxiosSecure();

    const { isLoading, data: contest } = useQuery({
        queryKey: ["contest", contestId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/contest/${contestId}`);
            return res.data;
        },
    });
    console.log(contest)

    if (isLoading) {
        return <span className="loading loading-dots  loading-xl"></span>
    }

    const handlePayment = async () => {
        const paymentInfo = {
            price:contest.price,
            contestId:contest._id,
            customer_email:contest.email,
            name:contest.name
        }
        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(res.data)
        window.location.assign(res.data.url)
    }
    return (
        <div>
            <h2> please pay ${contest?.price} for{contest?.name}</h2>
            <button onClick={handlePayment} className='btn bg-primary text-white'>pay</button>
        </div>
    );
};

export default Payment;