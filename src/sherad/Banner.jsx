import React from 'react';

const Banner = () => {
    return (
        <div>

            <div className="flex justify-center bg-black p-8 ">
                <div className="flex flex-col justify-center">

                    <div className="flex flex-col lg:flex-row max-w-7xl justify-center items-center p-2 space-y-3 w-full">
                        <div className="flex flex-col  text-white md:items-start items-center justify-between  space-y-3 px-8">
                            <div className="text-5xl md:text-3xl font-bold ">
                            MUSIC INSTRUMENT LEARNING SCHOOL</div>
                            <div className="text-lg uppercase md:text-xl   ">
                            Unlock the world with our immersive instrument programs!</div>
                            
                        </div>
                        <div className="flex space-x-2 md:space-x-6 md:m-4">

                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/100x400/?man" className="h-full w-full" alt="" />
                            </div>
                            <div className="md:w-60 w-28 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/200x400/?girl" className="h-full w-full" alt="" />

                            </div>
                            <div className="md:w-28  w-16 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/100x400/?boy" className="h-full w-full" alt="" />

                            </div>
                            <div className="md:w-20 w-10 h-60 md:h-96  overflow-hidden rounded-xl">
                                <img src="https://source.unsplash.com/100x400/?women" className="h-full w-full" alt="" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;