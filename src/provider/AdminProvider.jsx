import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import useAdmin from '../fetch/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminProvider = ({Children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isLoading] = useAdmin()
    const location = useLocation()
    if(loading || isLoading)
    {
        return <progress className="progress w-56"></progress>
    }
    if(user || isAdmin)
    {
        return Children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminProvider;