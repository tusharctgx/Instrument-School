import React from 'react';
import Banner from '../sherad/Banner';
import InstructorCard from '../sherad/InstructorCard';
import PopularClass from '../sherad/PopularClass';
import Lastsection from '../provider/Lastsection';

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <InstructorCard></InstructorCard>
            
            <Lastsection></Lastsection>
            
        </div>
    );
};

export default Home;