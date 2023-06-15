import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../sherad/Navber';
import Footer from '../sherad/Footer';

const MainLayout = () => {
    return (
        <div className='bg-black'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;