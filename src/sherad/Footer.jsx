import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                
                <div className="bg-gray-900 p-3 flex flex-col text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
                    <div
                        className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                        <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
                        <p>Designed by <span className="text-orange-400">MUSIC SCHOOL</span></p>
                    </div>
                    <div
                        className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
                        <a href="#"
                            className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                className="fa fa-twitter"></i></a> <a href="#"
                                    className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                        className="fa fa-instagram"></i></a> <a href="#"
                                            className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                                className="fa fa-facebook"></i></a> <a href="#"
                                                    className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                                        className="fa fa-google"></i></a> <a href="#"
                                                            className="w-8 h-8 bg-orange-500 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200"><i
                                                                className="fa fa-linkedin"></i></a> </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;