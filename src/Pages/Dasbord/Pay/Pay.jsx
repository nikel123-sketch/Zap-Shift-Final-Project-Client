import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';
import Loading from '../../../Component/Loading/Loading';


const Pay = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: parcel, isLoading } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const result = await axiosSecure.get(`/parcels/${parcelId}`);
      return result.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(parcel);

  // paybtnhendle---
  const paybtnhendle= async()=>{
    console.log('ok')
    const parcelinfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      SanderEmail: parcel.SanderEmail,
      parcelName: parcel.parcelName,
    };
    const result = await axiosSecure.post("/create-checkout-session",parcelinfo)
    window.location.href=result.data.url;
    console.log(result.data);
  }
  
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-indigo-50 to-purple-50">


      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
        {/* top gradient bar */}
        <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600" />

        <div className="bg-base-100 px-6 pb-6 pt-10">
          {/* floating icon */}
          <div className="absolute top-14 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 text-xl font-bold">
            $
          </div>

          <h2 className="text-center text-2xl font-bold mt-4">
            Secure Parcel Payment
          </h2>

          <p className="text-center text-sm text-gray-500 mt-1">
            Review your parcel details before paying
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Parcel Name</span>
              <span className="font-medium">{parcel.parcelName}</span>
            </div>

            <div className="flex justify-between border-b pb-2">
              <span className="text-gray-500">Delivery Cost</span>
              <span className="font-semibold text-indigo-600">
                {parcel.cost} $
              </span>
            </div>
          </div>

          {/* pay btn */}
          <button
            onClick={paybtnhendle}
            className="btn btn-primary w-full mt-6 text-lg"
          >
            Pay Securely
          </button>

          <p className="text-center text-xs text-gray-400 mt-3">
            Powered by Stripe • 100% Secure Payment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pay;