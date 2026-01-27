import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AssignRiders = () => {
  const [selectedparcel, setselectedparcels] = useState();
  const modalref = useRef();
  const axiosSecure = useAxiosSecure();


  const { data: parcels = [] ,refetch} = useQuery({
    queryKey: ["parcels", "Panding-Pickup"],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `/parcels?delevaryStatus=Panding-Pickup`,
      );
      return result.data;
    },
  });

  //   console.log(parcels);
  //   console.log(selectedparcel)

  const { data: riders = [] } = useQuery({
    queryKey: ["rider", selectedparcel?.Senderdistrict, "available"],
    enabled: !!selectedparcel?.Senderdistrict,

    queryFn: async () => {
      const result = await axiosSecure.get(
        `/riders?status=Approved&district=${selectedparcel.Senderdistrict}&workStatus=available`,
      );
      return result.data;
    },
  });
  console.log(riders);

  // hendleassignrider--
  const hendleassignrider = (parcel) => {
    // console.log(rider)
    setselectedparcels(parcel);
    modalref.current.showModal();
  };

  // hendleAssignConformRider----
  const hendleAssignConformRider=(rider)=>{
    console.log(rider)
    const riderAssigninfo={
      riderId:rider._id,
      riderName:rider.name,
      riderEmail:rider.email,
      parcelId:selectedparcel._id
    }

    axiosSecure.patch(`/parcels/${selectedparcel._id}`,riderAssigninfo)
    .then(res=>{
       if (res.data.modifiedCount) {
        modalref.current.close();
        refetch()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Riders has been Assign",
                showConfirmButton: false,
                timer: 2500,
              });
              
            }
    })
  }
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200 mt-6 p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Assign Riders ({parcels.length})
      </h2>

      <table className="w-full border-collapse text-sm">
        <thead className="bg-gradient-to-r from-blue-50 to-blue-100">
          <tr className="text-left font-bold text-gray-700 uppercase tracking-wider">
            <th className="px-6 py-3">Parcel Name</th>
            <th className="px-6 py-3">Sender Name</th>
            <th className="px-6 py-3">Receiver Name</th>
            <th className="px-6 py-3">Pickup District</th>
            <th className="px-6 py-3">Cost</th>
            <th className="px-6 py-3">Pickup Instruction</th>
            <th className="px-6 py-3">Payment Status</th>

            <th className="px-6 py-3">Tracking ID</th>
            <th className="px-6 py-3">Delivery Status</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {parcels.map((parcel, index) => (
            <tr
              key={parcel.trackingId || index}
              className="hover:bg-blue-50 transition-all duration-200"
            >
              <td className="px-6 py-4 font-medium text-gray-800">
                {parcel.parcelName}
              </td>

              <td className="px-6 py-4 text-gray-700">{parcel.sanderName}</td>
              <td className="px-6 py-4 text-gray-700">{parcel.ReceiverName}</td>
              <td className="px-6 py-4 font-medium text-gray-800">
                {parcel.Senderdistrict}
              </td>
              <td className="px-6 py-4 font-semibold text-blue-600">
                ${parcel.cost}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {parcel.pickupInstruction}
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 shadow-sm">
                  {parcel.paymentStatus}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600 break-all">
                {parcel.trackingId}
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 shadow-sm">
                  {parcel.delevaryStatus}
                </span>
              </td>
              <td className="px-6 py-4 font-medium text-gray-800">
                <button
                  onClick={() => hendleassignrider(parcel)}
                  className="btn btn-primary btn-sm"
                >
                  Find Rider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal */}
      <dialog ref={modalref} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Riders :{riders.length}
          </h3>

          {/* table */}
          <div className="overflow-x-auto rounded-2xl shadow-xl border border-base-300 bg-base-100 p-4">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <th className="py-4 text-sm uppercase tracking-wide">
                    Number
                  </th>
                  <th className="py-4 text-sm uppercase tracking-wide">Name</th>
                  <th className="py-4 text-sm uppercase tracking-wide">
                    Email
                  </th>
                  <th className="py-4 text-sm uppercase tracking-wide text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {riders.map((rider, i) => (
                  <tr
                    key={rider._id}
                    className="hover:bg-primary/5 transition duration-200"
                  >
                    <th className="font-semibold text-primary">{i + 1}</th>

                    <td className="font-medium">{rider.name}</td>

                    <td className="text-gray-500">{rider.email}</td>

                    <td className="">
                      <button
                        onClick={() => hendleAssignConformRider(rider)}
                        className="btn btn-xs btn-primary rounded-full "
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;