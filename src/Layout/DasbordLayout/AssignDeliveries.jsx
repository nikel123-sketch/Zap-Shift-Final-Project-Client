import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import Loading from '../../Component/Loading/Loading';

const AssignDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ["parcels", user?.email, "RiderAssign"],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&delevaryStatus=RiderAssign`,
      );
      return result.data;
    },
  });

  console.log(parcels);
  if (isLoading) {
    return <Loading></Loading>;
  }

  // hendleAcceptbtn---
  const hendleAcceptbtn=(parcel)=>{
    console.log(parcel)
    const parceldelevaryStatus = { delevaryStatus :'ridergoing'};
    axiosSecure.patch(`/parcels/${parcel._id}/status`,parceldelevaryStatus)
    .then(res=>{
        console.log(res.data)
    })


    
  }
  return (
    <div>
      <h1>Tatall Assaing Rider :{parcels.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>parcelName</th>
              <th>SanderEmail</th>
              <th>ReceiverEmail</th>
              <th>Senderdistrict</th>
              <th>Receiverdistrict</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.SanderEmail}</td>
                <td>{parcel.ReceiverEmail}</td>

                <td>{parcel.Senderdistrict}</td>
                <td>{parcel.Receiverdistrict}</td>
                <td>
                  <button
                    onClick={() => hendleAcceptbtn(parcel)}
                    className="btn btn-sm font-bold btn-primary mr-3"
                  >
                    Accept
                  </button>
                  <button className="btn btn-sm font-bold btn-warning">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignDeliveries;