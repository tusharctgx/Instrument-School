import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import useAxiosSecure from '../fetch/useAxiosSecure';

const Dashboard = () => {
    //TODO: LOAD DATA FROM SERVER

    
    const [axiosSecure] = useAxiosSecure()
    const [currentUser, setCureentuser] = useState({})
    const { user } = useContext(AuthContext);
    useEffect(() => {

        if (user?.email) {
            
            axiosSecure.get(`/user?email=${user?.email}`)
                .then(data => {
                    setCureentuser(data.data);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [])
    

    // const role = "admin";

    return (
        <div >
            <div className="flex flex-col lg:flex-row-reverse h-screen bg-gray-100">

                <div className="w-full font-bold lg:w-64 md:h-1/2 my-auto bg-slate-300 shadow">

                    {
                        currentUser?.role === "admin" && <nav className="mt-10">
                            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Admin Home</a>
                            <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Manage Class</a>
                            <Link to="manageuser"><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Manage User</a></Link>

                        </nav>}
                    
                    {
                    currentUser?.role === "instructor" && <nav className="mt-10">
                        <Link to="/dashboard/additem"><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Add a class</a></Link>
                       <Link to="/dashboard/instructorclassess"><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">My class</a></Link>

                    </nav>
                    }
                    {currentUser?.role || <nav className="mt-10">
                        <Link to="myallclasses"><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">My Selected Classes</a></Link>
                        <Link to='enrollclass'><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">My Enrolled Classes</a></Link>

                    </nav>
                    }
                    <div className='divider'></div>
                    <nav className="mt-10">
                        <Link to="/"><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Home</a></Link>
                        <Link to="/class"><a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Classes</a></Link>
                        <a href="#" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200">Contact</a>
                       
                    </nav>
                </div>


               
                <div className="flex flex-col flex-1 overflow-hidden">
                   
                    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
                    
                    </header>

                   
                    <main className="flex-1 p-6 overflow-y-auto">
                    
                        <Outlet></Outlet>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;