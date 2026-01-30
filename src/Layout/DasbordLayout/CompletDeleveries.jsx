import React from 'react';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Component/Loading/Loading';

const CompletDeleveries = () => {
     const axiosSecure = useAxiosSecure();
     const { user } = useAuth();
     const {
       data: parcels = [],
       isLoading,
       refetch,
     } = useQuery({
       queryKey: ["parcels", user?.email, "parcel_Delevared"],
       queryFn: async () => {
         const result = await axiosSecure.get(
           `/parcels/rider?riderEmail=${user.email}&delevaryStatus=parcel_Delevared`,
         );
         return result.data;
       },
     });

     console.log(parcels);
     if (isLoading) {
       return <Loading></Loading>
     }


     const calculatepayout=(parcel)=>{
        if(parcel.Senderdistrict===parcel.Receiverdistrict){
            return parcel.cost*0.8
        }
        else{
            return parcel.cost * 0.6
        }
     }
    return (
      <div className="overflow-x-auto mt-6">
        <h1 className="text-xl font-bold mb-4">
          Complete Deliveries : {parcels.length}
        </h1>

        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Number</th>

              <th>Parcel Name</th>
              <th>Parcel parcelType</th>
              <th>Date</th>
              <th>Cost</th>
              <th>Payout</th>
              <th>Status</th>
              <th>Acction</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                <td>{parcel.parcelName}</td>
                <td>{parcel.parcelType}</td>
                <td>{new Date(parcel.createdAt).toLocaleDateString()}</td>
                <td className="font-bold text-green-600">{parcel.cost}</td>
                <td className="font-bold text-green-600">
                  {calculatepayout(parcel)}
                </td>

                <td>
                  <span className="badge badge-success badge-sm">
                    Delivered
                  </span>
                </td>

                <td>
                    <button className='btn btn-sm'>Case Out</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default CompletDeleveries;