import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Component/Loading/Loading';


const MyParcel = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const {data:parcels=[],isLoading}=useQuery({
        queryKey:['myparcel',user?.email],
        queryFn:async ()=>{
            const result=await axiosSecure.get(`/parcels?email=${user?.email}`);
          
            return result.data;


        }
    })
    if (isLoading){
        return <Loading></Loading>
    }
    console.log(parcels);
    
      return (
        <div>
          <h1>this is my parcels {parcels.length}</h1>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>number</th>
                    <th>ParcelName</th>
                    <th>ParcelType</th>
                    <th>Cost</th>
                    <th>CreatedAt</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {parcels.map((parcel, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{parcel.parcelName}</td>
                      <td>{parcel.parcelType}</td>
                      <td>{parcel.cost} taka</td>
                      <td>{parcel.createdAt} </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
};

export default MyParcel;