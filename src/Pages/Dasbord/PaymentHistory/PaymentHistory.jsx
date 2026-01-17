import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/AxiosHooks/useAxiosSecure";
import Loading from "../../../Component/Loading/Loading";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ["paymenthistory", user?.email],
    
    queryFn: async () => {
      const res = await axiosSecure.get(`/paymenthistry?email=${user.email}`);
      return res.data;
    },
  });
  console.log(payments)
  if (isLoading) {
    return <Loading></Loading>;
  }

  

 return (
   <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
     {/* titale */}
     <h1 className="text-2xl font-semibold text-gray-800 px-6 py-4 border-b border-gray-200 text-center">
       Payment History ({payments.length})
     </h1>

     <table className="w-full border-collapse">
       {/* table head */}
       <thead className="bg-gray-50">
         <tr className="text-left text-sm font-semibold text-gray-600 uppercase tracking-wide">
           <th className="px-6 py-4">Number</th>
           <th className="px-6 py-4">Parcel Name</th>
           <th className="px-6 py-4">Amount</th>
           <th className="px-6 py-4">Currency</th>
           <th className="px-6 py-4">Status</th>
           <th className="px-6 py-4">Transaction ID</th>
           <th className="px-6 py-4">Paid At</th>
         </tr>
       </thead>

       {/* table body */}
       <tbody className="divide-y divide-gray-200">
         {payments.map((pay, index) => (
           <tr
             key={pay._id}
             className="text-sm text-gray-700 hover:bg-gray-50 transition"
           >
             <td className="px-6 py-4 font-medium">{index + 1}</td>
             <td className="px-6 py-4">{pay.parcelName}</td>
             <td className="px-6 py-4 font-semibold text-gray-900">
               ${pay.amount}
             </td>
             <td className="px-6 py-4 uppercase text-gray-600">
               {pay.currency}
             </td>
             <td className="px-6 py-4">
               <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                 {pay.paymentStatus}
               </span>
             </td>
             <td className="px-6 py-4 text-xs text-gray-500 break-all">
               {pay.transactionId}
             </td>
             <td className="px-6 py-4 text-gray-600">{pay.paidAt}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );

};

export default PaymentHistory;
