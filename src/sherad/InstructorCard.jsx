import React from 'react';
import { useQuery } from 'react-query';
import Cards from './Cards';

const InstructorCard = () => {
    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch(`${import.meta.env.VITE_server_link}/popular`)
        return res.json()
    })
    return (
        <div>
             <h6 className='text-white text-3xl text-center'>Instructor:{user.length}</h6>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  my-8'>
                {
                    user.map(use => <Cards key={use._id} use={use}></Cards>)
                }
            </div>
        </div>
    );
};

export default InstructorCard;