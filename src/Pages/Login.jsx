import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../sherad/SocialLogin';
import { AuthContext } from '../provider/Authprovider';
import Swal from 'sweetalert2';

const Login = () => {
    const {user, login} = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleLogin =(e)=>
    {
        e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(result=>
        {
            const user = result.user;
            
            navigate(from, { replace: true });
            if(user)
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Success',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
              
        })
    }
    return (
        <div >
            <div className="flex justify-center my-14">
                <div className="flex flex-col justify-center text-white items-center md:flex-row shadow rounded-xl max-w-7xl md:w-[60%]  m-2">
                    <form onSubmit={handleLogin} className=" w-full md:w-3/4">
                        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">

                            <h1 className="font-semibold text-xl md:text-3xl m-2">Login to your account</h1>

                        </div>
                        <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                            <div className="">
                                <div className="m-1 text-lg text-semibold">Email</div>
                                <input type="text"
                                name='email'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                            </div>
                            <div className="">
                                <div className="m-1 text-lg  text-semibold">Password</div>
                                <input type="password"
                                name='password'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent"/>
                            </div>
                        </div>
                        <div className="text-center mt-7">
                            {/* <button
                                className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-stone-600 hover:bg-stone-500  font-medium m-2 mb-6 ">Sign
                                In</button> */}
                                <input className='px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-stone-600 hover:bg-stone-500  font-medium m-2 mb-6 ' type="submit" value="Login" />
                        </div>

                    </form>
                    <div className='mx-1
                    '><small>New Here? <Link to="/signup">Register</Link></small></div>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
           

        </div>
    );
};

export default Login;