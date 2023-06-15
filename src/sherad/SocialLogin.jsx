import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { useNavigate } from 'react-router-dom';
import { saveUserDB } from '../fetch/userfetch';

const SocialLogin = () => {
    const { google } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleGoogle = () => {
        google()
            .then((result) => {
                const user = result.user;
                const saveuser = { name: user.displayName, email: user.email }
                saveUserDB(saveuser)
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }






    return (

        <div className="h-[100%] w-full md:w-1/2 items-center flex justify-center">

            <div className="text-stone-700 text-base font-semibold text-center my-10 space-y-2 m-2 cursor-pointer">
                <div className="flex justify-between border-2 border-stone-700 px-6 py-2">
                    <div className="m-1 text-lg text-white" onClick={handleGoogle}>Continue with Google</div>
                </div>


            </div>

        </div>

    );
};

export default SocialLogin;