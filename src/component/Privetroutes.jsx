

import { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Context/Authprovider';

const Privetroutes = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='  text-center'><span className="loading text-white loading-dots loading-xl"></span></div>
    }
    if (!user) {
        return <Navigate to="/login" state={location.pathname} replace></Navigate>
    }
    return children
};

export default Privetroutes;