import React from 'react';

const Table = ({ singleIns }) => {
    console.log(singleIns);
    return (
        <div>
            <tr className='text-white'>
                <td><img src={singleIns?.photo} alt="Avatar Tailwind CSS Component" /></td>
                <td>{singleIns?.name}</td>
                <td>{singleIns?.email}</td>
            </tr>;
        </div>
    );
};

export default Table;