import React from "react";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router";


const Forbidden = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md">
        <FaLock className="text-red-500 text-6xl mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          403 – Access Forbidden
        </h1>

        <p className="text-gray-600 mb-6">
          Sorry, you don't have permission to access this page.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
