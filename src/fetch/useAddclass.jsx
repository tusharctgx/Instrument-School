import { useState } from 'react';
import useAxiosSecure from './useAxiosSecure';
import Swal from 'sweetalert2';

const useAddClass = () => {
  const [data, setData] = useState(null);
  const [axiosSecure] = useAxiosSecure()


  const addClass = async (addclassData) => {

      const response = await axiosSecure.post('/addedclass', addclassData)
      .then(res=>{
        console.log(res);
        if(res.data.acknowledged)
        {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Added Class Successfully`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      });

      setData(response.data);
   
  };

  return { data, addClass };
};

export default useAddClass;
