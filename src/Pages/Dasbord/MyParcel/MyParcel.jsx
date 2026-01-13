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
    <div className="p-4">

      {/* titale */}
      <h1
        className="font-bold text-3xl text-center underline 
               text-transparent bg-clip-text 
               bg-gradient-to-r from-indigo-500 to-purple-600 mb-6"
      >
        My Totall Parcels {parcels.length}
      </h1>

      <div className="overflow-x-auto rounded-2xl shadow-xl bg-base-100">
        <table className="table table-zebra w-full">

          {/* head */}
          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <tr>
              <th>Number</th>
              <th>Parcel Name</th>
              <th>Parcel Type</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>


          {/* tbody */}
          <tbody>
            {parcels.map((parcel, index) => (
              <tr
                key={index}
                className="hover:bg-indigo-50 transition-all duration-200"
              >
                <th>{index + 1}</th>

                <td className="font-medium">{parcel.parcelName}</td>

                <td>{parcel.parcelType}</td>

                <td className="font-semibold text-indigo-600">
                  {parcel.cost} taka
                </td>

                <td className="text-sm text-gray-500">{parcel.createdAt}</td>


              {/* paid and pay btn */}
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span
                      className="text-green-600 bg-green-100 
                             px-3 py-1 rounded-full 
                             text-xs font-semibold shadow-sm"
                    >
                      Paid
                    </span>
                  ) : (
                    <Link to={`/dasbord/pay/${parcel._id}`}>
                      <button
                        className="btn btn-sm text-white 
                               bg-gradient-to-r from-indigo-500 to-purple-600 
                               hover:scale-105 transition-transform"
                      >
                        Pay
                      </button>
                    </Link>
                  )}
                </td>

                  {/* edit and delete btn */}
                <td className="flex gap-3">
                  <button
                    className="btn btn-square btn-sm 
                           hover:bg-indigo-100 
                           transition-colors duration-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deletehendlebtn(parcel._id)}
                    className="btn btn-square btn-sm 
                           hover:bg-red-100 
                           transition-colors duration-200"
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
  );
};

export default MyParcel;
