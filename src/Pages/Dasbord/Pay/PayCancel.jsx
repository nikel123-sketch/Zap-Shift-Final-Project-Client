import React from "react";
import { Link } from "react-router";

const PayCancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Payment Cancelled!
        </h1>
        <p className="text-gray-500 mb-6">
          Your payment was not completed. Please try again.
        </p>
        {/* try again btn */}
        <Link to={"/dasbord/myparcel"}>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Try Again
          </button>
        </Link>

      </div>
    </div>
  );
};

export default PayCancel;
