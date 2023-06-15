import React, { useContext } from 'react';
import useAxiosSecure from '../fetch/useAxiosSecure';
import { useQuery } from 'react-query';
import { AuthContext } from '../provider/Authprovider';

const MyenrollClass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: enroll = [], refetch } = useQuery(['class'], async () => {
        const res = await axiosSecure.get(`/myenrollclasses?email=${user?.email}`)
        console.log(res);
        return res.data
       
    })
    return (
        <div>
            <div className='mx-auto'>
            <h4>All Enroll Class</h4>

            <div className="w-80%">
                <h3 className="text-3xl font-semibold ">Total Enroll Class: {enroll.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center p-6 my-4">

                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Date</th>
                                <th>Instructor Email</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enroll?.map((eroll, index) => <tr key={eroll._id}>
                                    <th>{index + 1}</th>
                                    <td>{eroll.productname}</td>
                                    <td>{enroll.date}</td>
                                    <td>{eroll.instructorEmail}</td>
                                    <td className='text-blue-400'>Successfull</td>
                                    
                                
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyenrollClass;