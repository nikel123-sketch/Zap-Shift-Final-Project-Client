
import React, { useState } from "react";

const Pricing = () => {
  const [price, setPrice] = useState(50);

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-teal-900 mb-2">
          Pricing Calculator
        </h1>
        <p className="text-gray-500 max-w-xl mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <hr className="mb-10" />

        {/* Calculator Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Form */}
          <div>
            <h2 className="text-xl font-semibold text-teal-900 mb-6 text-center md:text-left">
              Calculate Your Cost
            </h2>

            <div className="space-y-4 max-w-sm">
              {/* Parcel Type */}
              <div>
                <label className="text-sm font-medium">Parcel type</label>
                <select className="select select-bordered w-full mt-1">
                  <option disabled selected>
                    Select Parcel type
                  </option>
                  <option>Document</option>
                  <option>Box</option>
                  <option>Fragile</option>
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="text-sm font-medium">
                  Delivery Destination
                </label>
                <select className="select select-bordered w-full mt-1">
                  <option disabled selected>
                    Select Delivery Destination
                  </option>
                  <option>Inside City</option>
                  <option>Outside City</option>
                </select>
              </div>

              {/* Weight */}
              <div>
                <label className="text-sm font-medium">Weight (KG)</label>
                <input
                  type="number"
                  placeholder="Contact"
                  className="input input-bordered w-full mt-1"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button className="btn btn-outline border-lime-400 text-lime-600">
                  Reset
                </button>
                <button className="btn bg-lime-400 hover:bg-lime-500 text-black flex-1">
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Right Price */}
          <div className="flex justify-center items-center">
            <h1 className="text-6xl font-extrabold text-black">{price} Tk</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
