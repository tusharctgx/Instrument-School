import React, { useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { useForm } from "react-hook-form";
import useAddClass from '../fetch/useAddclass';

const AddItems = () => {
    const {user} = useContext(AuthContext);
    const {addClass} = useAddClass()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageAPIKey = import.meta.env.VITE_IMGBB_KEY;
    const hostingUrl = `https://api.imgbb.com/1/upload?key=${imageAPIKey}`;
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append("image", data.images[0]);
        fetch(hostingUrl, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(imgres=> {
            if(imgres.success)
            {
                const imageURL = imgres.data.display_url;
                const {productname, seats, price,instructorName, instructorEmail} = data;
                
                const addItem = {productname, seats: parseFloat(seats), price: parseFloat(price),instructorName, instructorEmail, images:imageURL};
                console.log(addItem);
                addClass(addItem).then(data=> console.log(data))
            }
        })
    };
  
    // console.log(watch("example"));
    return (
        <div>
            
            <div>
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Class</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                <div className="sm:col-span-2">
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Name</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" {...register("productname", { required: true })}/>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Name</label>
                                    <input type="text" name="instructor" id="instructor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={user?.displayName} {...register("instructorName")} readOnly/>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructor Email</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={user?.email} {...register("instructorEmail")} readOnly/>
                                </div>
                                <div className="w-full">
                                    <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$100" {...register("price", { required: true })} />
                                </div>
                                
                                <div>
                                    <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avaiablle Seats</label>
                                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="100" {...register("seats", { required: true })}/>
                                </div>
                                <input type="file" {...register("images", { required: true })} className="file-input file-input-ghost w-full max-w-xs" />
                                <input type="submit" className="btn btn-outline  inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                              value="Add product" />
                            </div>
                            
                           
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AddItems;