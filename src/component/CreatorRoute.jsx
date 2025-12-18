import React, { use } from 'react';
import useRole from '../hooks/useRole';
import Forbidden from './Forbidden';
import { AuthContext } from '../Context/Authprovider';

const CreatorRoute = ({children}) => {
    const { user, loading } = use(AuthContext)
    const { role, roleLoading } = useRole()
    console.log(role)
    if (loading || roleLoading) {
        return <span className="loading loading-dots loading-xl"></span>
    }
    if (role.role !== 'Creator') {
        return <Forbidden></Forbidden>
    }
    return children
};

export default CreatorRoute;