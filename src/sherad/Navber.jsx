import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import Swal from 'sweetalert2'

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success LogOut',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="navbar m-container bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/"><li><a className='text-black'>Home</a></li></Link>
                        <Link to="/instructor"><li><a className='text-black'>Instructor</a></li></Link>
                        <Link to="/class"><li className='"hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5'><a>Class</a></li></Link>
                        <li>
                        {user ? <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                               
                                <img className="w-10 rounded-full "
                            src={user?.photoURL} alt="" />
                                
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="dashboard"><li><a className='text-black'>Dashboard</a></li></Link>
                                <li onClick={handleLogout}><a className='text-black'>Logout</a></li>
                            </ul>
                        </div>
                    </div> : <Link to="login"><li className='"hover:underline underline-offset-4 decoration-2 decoration-white btn btn-active btn-ghost py-2 rounded-lg px-5'>login</li></Link>}
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost uppercase pl-5 py-4 text-lg font-sans font-bold">INSTRUMENT<small className='text-xs'>MUSIC</small></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 hidden lg:flex items-center text-[18px] font-semibold pl-32">
                    <Link to='/'><li className='"hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5'><a>Home</a></li></Link>
                    <Link to="/instructor"><li className='"hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5'><a>Instructor</a></li></Link>
                    <Link to="class"><li className='"hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5'><a>Class</a></li></Link>
                    <li>
                    {user ? <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full"  >
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="dashboard"><li><a className='text-black'>Dashboard</a></li></Link>
                                <li onClick={handleLogout}><a className='text-black'>Logout</a></li>
                            </ul>
                        </div>
                    </div> : <Link to="login"><li className='"hover:underline underline-offset-4 decoration-2 decoration-white btn btn-active btn-ghost py-2 rounded-lg px-5'>login</li></Link>}
                    </li>
                </ul>
            </div>

        </div>
    );
};




export default Navber;