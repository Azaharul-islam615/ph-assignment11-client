import React, { use } from 'react';
import { AuthContext } from '../Context/Authprovider';
import useRole from '../hooks/useRole';
import Forbidden from './Forbidden';

const AdminRoute = ({children}) => {
    const {user,loading}=use(AuthContext)
    const {role,roleLoading}=useRole()
    console.log(role)
    if(loading || roleLoading){
        return <span className="loading loading-dots loading-xl"></span>
    }
    if(role.role !=='admin'){
        return <Forbidden></Forbidden>
    }
    return children
};

export default AdminRoute;