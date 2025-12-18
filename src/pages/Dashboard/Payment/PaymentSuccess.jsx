import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import UseaxiosSecure from '../../../hooks/UseaxiosSecure';

const PaymentSuccess = () => {
    const [searchParams]=useSearchParams()
    const sessionId =searchParams.get('session_id')
    const axiosSecure=UseaxiosSecure()
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data)
            })
        }
    },[sessionId,axiosSecure])
    return (
        <div>
            <title>contestHub-payment-successfull</title>
            <h2 className="text-4xl">payment-successfull</h2>
        </div>
    );
};

export default PaymentSuccess;