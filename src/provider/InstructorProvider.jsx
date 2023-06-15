import React, { useContext } from 'react';
import useInstructor from '../fetch/useInstructor';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './Authprovider';

const InstructorProvider = ({Children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isInstructor, isLoading] = useInstructor()
    const location = useLocation()
    console.log(isInstructor);
    if( user  && isInstructor)
    {
        return Children;
    }
    if(loading || isLoading)
    {
        return <progress className="progress w-56"></progress>
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorProvider;