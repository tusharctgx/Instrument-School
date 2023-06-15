import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SocialLogin from '../sherad/SocialLogin';
import { AuthContext } from '../provider/Authprovider';
import Swal from 'sweetalert2';
import { saveUserDB } from '../fetch/userfetch';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser, user, userUpdateProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    // const handleReg =(e)=>
    // {
    //     e.preventDefault();
    // const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(email);
    // }
    const onSubmit = data => {
        console.log(data.password, data.confirmpassword)
        if(data.password === data.confirmpassword)
        {
             createUser(data.email, data.password)
        .then(result=>{
            const newUser = result.user;
            console.log(newUser);
            userUpdateProfile(data.name, data.photourl)
            .then(()=>{
                const saveuser = {name: data.name, email: data.email, photo: data.photourl}
                saveUserDB(saveuser)
                navigate("/")
                reset();
            })
            .catch(error=>console.log(error))

            if(newUser)
            {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success Sign Up',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

        }
       
    };
    return (
        <div>
            <div className="flex justify-center my-14">
                <div className="flex flex-col justify-center text-white items-center md:flex-row shadow rounded-xl max-w-7xl md:w-[60%]  m-2">
                    <form onSubmit={handleSubmit(onSubmit)} className=" w-full md:w-3/4">
                        <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">

                            <h1 className="font-semibold text-xl md:text-3xl m-2">Sign Up to your account</h1>

                        </div>
                        <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
                            <div className="">
                                <div className="m-1 text-lg text-semibold">Name</div>
                                <input type="text" {...register("name", { required: true})}
                                    name='name'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                            </div>
                            <div className="">
                                <div className="m-1 text-lg text-semibold">Email</div>
                                <input type="text" {...register("email")}
                                    name='email'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                            </div>
                            <div className="">
                                <div className="m-1 text-lg  text-semibold">Password</div>
                                <input type="password" {...register("password", { required: true,
                                 minLength: 6,
                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                                    name='password'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                                    {errors.password?.type==="required" && <p className='text-white'>password required</p>}
                                    {errors.password?.type==="minLength" && <p className='text-white'>password atlest 6 digite</p>}
                                    {errors.password?.type==="pattern" && <p className='text-white'>give one upper and smaller latter and one special charter</p>}
                            </div>
                            <div className="">
                                <div className="m-1 text-lg  text-semibold">Confirm Password</div>
                                <input type="password" {...register("confirmpassword", { required: true})}
                                    name='confirmpassword'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                            </div>
                            <div className="">
                                <div className="m-1 text-lg text-semibold">PhotoURL</div>
                                <input type="text" {...register("photourl")}
                                    name='photourl'
                                    className="border-b border-gray-500 focus:outline-none  text-gray-500 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px] bg-transparent" />
                            </div>
                            
                        </div>
                        <div className="text-center mt-7">

                            <input className='px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-stone-600 hover:bg-stone-500  font-medium m-2 mb-6 ' type="submit" value="Sign Up"/>
                        </div>

                    </form>
                    <div className='mx-1
                    '><small>Already have an Account? <Link to="/login">Login</Link></small></div>

                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    );
};

export default SignUp;