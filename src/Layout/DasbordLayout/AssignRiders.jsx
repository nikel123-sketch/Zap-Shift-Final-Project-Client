import React, { useRef } from 'react';
import useAxiosSecure from '../../Hooks/AxiosHooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AssignRiders = () => {
    const modalref=useRef()
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "Panding-Pickup"],
    queryFn: async () => {
      const result = await axiosSecure.get(
        `/parcels?delevaryStatus=Panding-Pickup`,
      );
      return result.data;
    },
  });

  console.log(parcels);

  // hendleassignrider--
  const hendleassignrider=(rider)=>{
    console.log(rider)
    modalref.current.showModal()
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
                  Assing Rider
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* modal */}
      <dialog ref={modalref} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
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