import React, { useContext, useEffect, useState } from 'react';
import { classSelectBD } from '../fetch/userfetch';
import { AuthContext } from '../provider/Authprovider';
import useAxiosSecure from '../fetch/useAxiosSecure';
import { toast } from 'react-toastify';

const Card = ({data}) => {
    const {user} = useContext(AuthContext)
    const [currentUser, setCureentuser] = useState({})
    const {_id, images, instructorEmail, instructorName, price, productname, seats}= data
    const dataSave = {images, instructorEmail, instructorName, price, productname, seats, useremail: user?.email, classId: _id}

    const handleAddCard = async dataSave =>
    {
        classSelectBD(dataSave);
        toast.success('class are selected')
    }
    
    const [axiosSecure] = useAxiosSecure()
    
   
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
    // const isButtonDisabled = role === 'admin' || role === 'instructor';
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={images} alt="" className='object-cover h-48 w-96'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {productname}</h2>
                    <div className='flex items-center space-x-4'>
                    <p className='whitespace-nowrap'>Instructor Name: {instructorName}</p>
                    <p className='whitespace-nowrap'> price: {price}</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                    <p className='whitespace-nowrap'>Instructor Email: {instructorEmail}</p>
                    <p  className='whitespace-nowrap'>Avaiable Seat: {seats}</p>
                    </div>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-outline btn-primary" onClick={()=>handleAddCard(dataSave)}>Select</button> */}
                        {
                            currentUser?.role === "instructor" || currentUser?.role === "admin"  ? <button disabled className="btn btn-outline btn-primary">Select</button> : <button className="btn btn-outline btn-primary" onClick={()=>handleAddCard(dataSave)}>Select</button> 
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;