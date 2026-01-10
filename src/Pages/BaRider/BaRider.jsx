import React from "react";
import img from '../../assets/banner/agent-pending.png'
const BaRider = () => {
  return (
    <div className=" flex justify-between justify-center items-start bg-gray-50 py-10">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow">
        {/* Header */}
        <h1 className="text-2xl font-bold text-teal-900 mb-2">Be a Rider</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        {/* Section title */}
        <h2 className="text-lg font-semibold text-teal-900 mb-4">
          Tell us about yourself
        </h2>

        {/* Form */}
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Driving License Number"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />

          <select className="select select-bordered w-full">
            <option disabled selected>
              Select your Region
            </option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Rajshahi</option>
          </select>

          <select className="select select-bordered w-full">
            <option disabled selected>
              Select your District
            </option>
            <option>Dhaka</option>
            <option>Gazipur</option>
            <option>Narayanganj</option>
          </select>

          <input
            type="text"
            placeholder="NID No"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Bike Brand Model and Year"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Bike Registration Number"
            className="input input-bordered w-full"
          />

          <textarea
            placeholder="Tell Us About Yourself"
            className="textarea textarea-bordered w-full"
          ></textarea>

          <button className="btn w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold">
            Submit
          </button>
        </form>
      </div>

      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default BaRider;
