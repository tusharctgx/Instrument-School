import React, { useEffect, useState } from 'react';
import { getAllClass } from '../fetch/addclass';
import Card from '../sherad/Card';

const Classes = () => {
    const [datas, setData] = useState([])
    useEffect(()=>{
        getAllClass()
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h3 className="text-3xl font-semibold ">Selected Class: {datas.length}</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-6 mx-4'>
                {
                    datas.map(data=> <Card key={data._id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Classes;