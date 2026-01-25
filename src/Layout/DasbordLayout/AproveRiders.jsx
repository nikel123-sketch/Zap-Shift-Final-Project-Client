import React from 'react';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AproveRiders = () => {
    const axiosSecure=useAxiosSecure();

    // tanstak query--
    const {data:riders=[]}=useQuery({
        queryKey:['riders'],
        queryFn: async()=>{
          const result= await axiosSecure.get("/riders")
          return result.data
        }
    })
    console.log(riders)
    
    
    
    return (
        <div>
            <h1>this is aprove riders {riders.length}</h1>
        </div>
    );
};

export default AproveRiders;