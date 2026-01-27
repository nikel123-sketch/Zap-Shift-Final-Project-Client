import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import Loading from '../../Component/Loading/Loading';
import Swal from 'sweetalert2';

const AssignDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: parcels = [], isLoading,refetch } = useQuery({
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
  const hendleDelevaryStatusUpdate=(parcel,status)=>{
    console.log(parcel)
    let message=`parcel status is ${status}`
    const parceldelevaryStatus = { delevaryStatus :status};
    axiosSecure.patch(`/parcels/${parcel._id}/status`,parceldelevaryStatus)
    .then(res=>{
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: message,
              timer: 1500,
              showConfirmButton: false,
            });

            refetch(); // reload rider list
          }
    })    
  }

//   hendleRiderReject---
const hendleRiderReject = (parcel) => {
  Swal.fire({
    title: "Reject this parcel?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Reject",
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure
        .patch(`/parcels/${parcel._id}/status`, {
          delevaryStatus: "RiderAssign",
        })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Parcel Returned",
              timer: 1500,
              showConfirmButton: false,
            });

            refetch(); // reload rider list
          }
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Failed to reject parcel",
          });
        });
    }
  });
};

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        Parcel Pending Pickup :{parcels.length}
      </h1>

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
              <th>Confrom</th>
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

                <td className="flex items-center gap-2">
                  {parcel.delevaryStatus === "RiderAssign" ? (
                    <>
                      <button
                        onClick={() =>
                          hendleDelevaryStatusUpdate(parcel, "ridergoing")
                        }
                        className="px-4 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-all duration-200 shadow"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() =>
                          hendleRiderReject(parcel, "parcelRejected")
                        }
                        className="px-4 py-1.5 rounded-md bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-all duration-200 shadow"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      Accepted
                    </span>
                  )}
                </td>

                <td>
                  {parcel.delevaryStatus !== "parcel_picked_up" ? (
                    <>
                      <button
                        onClick={() =>
                          hendleDelevaryStatusUpdate(parcel, "parcel_picked_up")
                        }
                        className="btn btn-sm btn-secondary mr-4"
                      >
                        Mark As Pickup
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                        Mark As Pickup
                      </span>
                    </>
                  )}

                  <button
                    onClick={() =>
                      hendleDelevaryStatusUpdate(parcel, "parcel_Delevared")
                    }
                    className="btn btn-sm btn-primary"
                  >
                    Mark As Delevared
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