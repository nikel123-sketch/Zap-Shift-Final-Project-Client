import React from "react";
import useAxiosSecure from "../../Hooks/AxiosHooks/useAxiosSecure";
import {  useQuery,  } from "@tanstack/react-query";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";




const AproveRiders = () => {
    // refese ---
  const queryClient = useQueryClient();

  const axiosSecure = useAxiosSecure();

  // fetch riders
  const { data: riders = [], isLoading } = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const result = await axiosSecure.get("/riders");
      return result.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;

  //   hendleAproval---
  const hendleAproval = (id) => {
    console.log(id);
    const updateinfo = { status: "Approved" };
    axiosSecure.patch(`/riders/${id}`, updateinfo).then((result) => {
      if (result.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Riders has been Aproved",
          showConfirmButton: false,
          timer: 2500,
        });
        // ✅ REFRESH TABLE properly
        queryClient.invalidateQueries(["riders"]);
      }
    });
  };

  // hendleDelete--
  const hendleDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/riders/${id}`).then((res) => {
      if (res.data.deletedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Riders has been deleted",
          showConfirmButton: false,
          timer: 2500,
        });

        // ✅ REFRESH TABLE properly
        queryClient.invalidateQueries(["riders"]);
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold mb-4">
        This is Approve Riders ({riders.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-sm">

            {/* table head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-2 py-1">Number</th>
              <th className="border border-gray-300 px-2 py-1">Name</th>
              <th className="border border-gray-300 px-2 py-1">
                Bike Model & Year
              </th>
              <th className="border border-gray-300 px-2 py-1">
                Bike Registration
              </th>
              <th className="border border-gray-300 px-2 py-1">
                Driving License
              </th>
              <th className="border border-gray-300 px-2 py-1">Region</th>
              <th className="border border-gray-300 px-2 py-1">District</th>
              <th className="border border-gray-300 px-2 py-1">Email</th>
              <th className="border border-gray-300 px-2 py-1">NID</th>
              <th className="border border-gray-300 px-2 py-1">Phone</th>
              <th className="border border-gray-300 px-2 py-1">Status</th>
              <th className="border border-gray-300 px-2 py-1">Acction</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr
                key={rider._id || index}
                className="hover:bg-gray-50 transition"
              >
                <td className="border border-gray-300 px-2 py-1">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.name}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.BikeModelAndYear}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.BikeRegistrationNumber}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.DrivingLicenseNumber}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.RiderRegion}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.Riderdistrict}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.email}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.nidNumber}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.phoneNumber}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {rider.status}
                </td>

                {/* Acction Buttons */}
                <td className="flex gap-2 px-2 py-1">
                  {/* Approve */}
                  <button
                    onClick={() => hendleAproval(rider._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full hover:bg-green-200 transition"
                    title="Approve Rider"
                  >
                    <FaUserCheck />
                    {rider.status === "approved" ? "Approved" : "Approve"}
                  </button>

                  {/* Reject */}
                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full hover:bg-red-200 transition"
                    title="Reject Rider"
                  >
                    <IoPersonRemove />
                    {rider.status === "rejected" ? "Rejected" : "Reject"}
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => hendleDelete(rider._id)}
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full hover:bg-gray-200 transition"
                    title="Delete Rider"
                  >
                    <AiFillDelete />
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

export default AproveRiders;
