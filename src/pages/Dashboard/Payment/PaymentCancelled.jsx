import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <title>contestHub-paymentCancelled</title>
            <h2>pay is cancelled ,please try again</h2>
            <Link to="/allcontest"> <button className='btn btn-primary '>Try again</button></Link>
        </div>
    );
};

export default PaymentCancelled;