import React from 'react';
import { useQuery } from 'react-query';
import Table from '../Components/Table';

const Instructorpage = () => {
    const { data: user = [], refetch } = useQuery(['user'], async () => {
        const res = await fetch(`${import.meta.env.VITE_server_link}/instructor`)
        return res.json()
    })
    return (
        <div>
            <h6 className='text-white text-3xl text-center'>Instructor:{user.length}</h6>
            <div className="overflow-x-auto my-24 w-3/4 mx-auto">
                <table className="table bg-white">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map((singleIns, index) =>
                                <tr className='text-black'>
                                    <td>{index + 1}</td>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-20 rounded-full"  >
                                            <img src={singleIns?.photo} />
                                        </div>
                                    </label>

                                    {/* <td><img src={singleIns?.photo} className="w-10 rounded-full " alt="image" /></td> */}
                                    <td>{singleIns?.name}</td>
                                    <td>{singleIns?.email}</td>
                                </tr>

                            )
                        }



                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default Instructorpage;