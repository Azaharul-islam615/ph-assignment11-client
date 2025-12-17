import { useQuery } from '@tanstack/react-query';
import React, { use } from 'react';
import { AuthContext } from '../Context/Authprovider';
import UseaxiosSecure from './UseAxiosSecure';

const useRole = () => {
    const {user}=use(AuthContext)
   
    const axiosSecure=UseaxiosSecure()
    const {isLoading, data:role='user'}=useQuery({
        queryKey:['user-role',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/users/${user.email}/role`)
            return res.data
        }
    })

    return {role,isLoading};
};

export default useRole;