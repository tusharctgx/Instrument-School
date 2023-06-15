import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/Authprovider';
import axios from 'axios';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../fetch/useAxiosSecure';
import { Link, useNavigate } from 'react-router-dom';


const Myallelectedclass = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()

    const { data: seleectdata =[], refetch } = useQuery({

        queryKey: ['alldata', user?.email], 
        // queryFn: async () => {
        // const res = await fetch(`${import.meta.env.VITE_server_link}/userselectclass?email=${user?.email}`, {headers: {authToken: `bearer ${settoken}`}})
        // return res.json();
        // },
        queryFn: async ()=>
        {
            const res = await axiosSecure(`/userselectclass?email=${user?.email}`)
            console.log(res.data);
            return res.data;
            
        }

    })


    const handleDelete = (item) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete This!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            axios.delete(`${import.meta.env.VITE_server_link}/selecteditemsdelete/${item._id}`)
            .then(data=>{
                console.log(data.data);
                if(data.data.deletedCount > 0)
                {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
                
            })
            }
          })
    }
    return (
        <div>
            <div className="w-80%">
                <h3 className="text-3xl font-semibold ">Selected Class: {seleectdata.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Course Name</th>
                                <th>Instructor Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                seleectdata?.map((data, index) => <tr key={data._id}>
                                    <th>{index + 1}</th>
                                    <td>{data.useremail}</td>
                                    <td>{data.productname}</td>
                                    <td>{data.instructorName}</td>

                                    <td>
                                        <button className="btn btn-sm btn-outline" onClick={()=>handleDelete(data)}>Delete</button>
                                        <button className="btn btn-sm btn-outline" onClick={()=>navigate('/dashboard/payment', {state: data})}>Pay</button>
                                    </td>
                                    

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myallelectedclass;