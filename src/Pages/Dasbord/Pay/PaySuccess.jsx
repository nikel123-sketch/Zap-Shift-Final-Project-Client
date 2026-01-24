import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/AxiosHooks/useAxiosSecure';

const PaySuccess = () => {
    const axiosSecure=useAxiosSecure();
    const [search]=useSearchParams();
    const [paymentinfo,setpaymentinfo]=useState({})
    console.log(paymentinfo)
    const sessionId = search.get("session_id");
    console.log(sessionId)

    useEffect(()=>{
        if(sessionId){
            axiosSecure.patch(`/paymentSuccess?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
                setpaymentinfo(res.data)
            })
        }
    },[sessionId,axiosSecure])
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Payment Successful
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Your payment has been completed successfully
          </p>

          {/* Info */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-500">Tracking ID</span>
              <span className="font-medium text-gray-800">
                {paymentinfo.trackingId}
              </span>
            </div>

            <div className="flex justify-between bg-gray-50 p-3 rounded-lg">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-medium text-gray-800">
                {paymentinfo.transactionId}
              </span>
            </div>
          </div>

          {/* Button */}
          <Link to={"/dasbord/paymenthistory"}>
            <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg font-medium transition">
              Go to Payment History
            </button>
          </Link>
        </div>
      </div>
    );
};

export default PaySuccess;