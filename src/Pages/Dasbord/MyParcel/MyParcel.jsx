import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const MyParcel = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:parcel=[],isLoading}=useQuery({
        queryKey:['myparcel',user?.email],
        queryFn:async ()=>{
            const result=await axiosSecure.get(`/parcels?email=${user?.email}`);
            return result.data;

        }
    })
    if (isLoading){
        return <span className="loading loading-spinner text-error"></span>;
    }
      return (
        <div>
          <h1>this is my parcels {parcel.length}</h1>
        </div>
      );
};

export default MyParcel;