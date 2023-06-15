import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../fetch/useAxiosSecure';

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get("/userslist")
        console.log(res);
        return res.data
       
    })

    // console.log(import.meta.env.VITE_server_link);

    const handleCLick = async (role, id) => {
        console.log(role);
        const myobj = { role: role }

        const res = await axios.patch(`${import.meta.env.VITE_server_link}/users/role/${id}`, myobj
        )
        .then(res=>
            {
                console.log(res.data);
                if(res.data.modifiedCount)
                {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Now he is ${role}`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        

    }
    return (
        <div className='mx-auto'>
            <h4>my manage user page</h4>

            <div className="w-80%">
                <h3 className="text-3xl font-semibold ">Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra text-center p-6 my-4">

                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='text-center'>
                                        <button disabled={user.role==="admin"} className="btn btn-sm btn-outline" onClick={() => handleCLick("admin", user._id)}>admin</button>
                                        <button disabled={user.role==="instructor"} className="btn btn-sm btn-outline" onClick={() => handleCLick("instructor", user._id)}>Instructor</button>
                                    </td>
                                    <td className='text-center font-bold'>{user?.role || "user"}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;