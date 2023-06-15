import React, { useContext, useEffect } from 'react';
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AuthContext } from '../provider/Authprovider';


const Loader = () => {
    const {loading} = useContext(AuthContext);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <div>
             <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <svg
          className="animate-spin h-10 w-10 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-1.647zm9-1.647c1.865-2.114 3-4.896 3-7.938h-4a7.96 7.96 0 01-2 5.291l3 1.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 1.647A7.962 7.962 0 0016 12h4zm-2 5.291A7.962 7.962 0 0020 12h-4c0 2.114-.816 4.025-2 5.291l3 1.647z"
          ></path>
        </svg>
      ) : (
        <h1 className="text-3xl font-bold text-gray-700">Loading complete!</h1>
      )}
    </div>
        </div>
    );
};

export default Loader;