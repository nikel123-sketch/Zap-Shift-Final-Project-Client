import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';
import Loading from '../../../Component/Loading/Loading';

const Pay = () => {
    const {parcelId}=useParams();
    const axiosSecure=useAxiosSecure();
    const {data:parcel,isLoading,} = useQuery({
      queryKey: ["parcels", parcelId],
      queryFn:async ()=>{
        const result=await axiosSecure.get(`/parcels/${parcelId}`)
        return result.data;
      }
    });
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(parcel)
    return (
        <div>
            <h1>Parcel for Pay :{parcel.parcelName}</h1>

            {/* pay btn */}
            <button className="btn btn-primary">pay</button>
        </div>
    );
};

export default Pay;