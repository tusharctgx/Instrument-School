import React, { useContext } from 'react';
import useAxiosSecure from '../fetch/useAxiosSecure';
import { AuthContext } from '../provider/Authprovider';
import { useQuery } from 'react-query';

const Instructormyclass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: enroll = [], refetch } = useQuery(['myclass'], async () => {
        const res = await axiosSecure.get(`/users/instructor/course/${user?.email}`)
        console.log(res);
        return res.data
       
    })
    return (
        <div>
            <div className="w-80%">
                <h3 className="text-3xl font-semibold ">Total Class: {enroll.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center p-6 my-4">

                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Instructor Email</th>
                                <th>Successfully Enroll</th>
                                <th>Feedback</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enroll?.map((eroll, index) => <tr key={eroll._id}>
                                    <th>{index + 1}</th>
                                    <td>{eroll.productname}</td>
                                    <td>{eroll.instructorEmail}</td>
                                    <td>{eroll.count}</td>
                                    <td className='text-blue-400'><button>FeedBack</button></td>
                                    <td className='text-blue-400'><button>Update</button></td>
                                    
                                
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instructormyclass;