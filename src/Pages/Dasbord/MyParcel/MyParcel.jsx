import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/AxiosHooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Component/Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], isLoading,refetch } = useQuery({
    queryKey: ["myparcel", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/parcels?email=${user?.email}`);

      return result.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(parcels);

  // deletehendlebtn--
  const deletehendlebtn=(id)=>{
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/parcels/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              refetch()
              Swal.fire({
                title: "Deleted!",
                text: "Your parcel has been deleted successfully.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete parcel.",
              icon: "error",
            });
          });
        
      }
    });    
  }
  return (
    <div>
      <h1 className="font-bold text-3xl text-center underline">
        My Totall Parcels {parcels.length}
      </h1>

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
                <th>Payment</th>
                <th>Acction</th>
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
                  <td>
                  {
                    parcel.paymentStatus==='paid'?
                    <span className="text-green-400 btn btn-accent btn-sm ">paid</span>:
                    <Link to={`/dasbord/pay/${parcel._id}`}>
                    <button className="btn btn-primary btn-sm">pay</button>
                    </Link>
                  }  
                   </td>
                  <td className="flex gap-3">
                    <button className="btn btn btn-square btn-sm hover:bg-amber-200">
                      Edit
                    </button>
                    <button className="btn btn btn-square btn-sm hover:bg-amber-200">
                      Pay
                    </button>
                    <button
                      onClick={()=>deletehendlebtn(parcel._id)}
                      className="btn btn btn-square btn-sm hover:bg-amber-200"
                    >
                      Delete
                    </button>
                  </td>
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
