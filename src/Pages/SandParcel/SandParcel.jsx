import React from "react";

const SandParcel = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        {/* Header */}
        <h1 className="text-2xl font-bold text-teal-900 mb-2">Send A Parcel</h1>
        <p className="text-sm text-teal-800 mb-6">Enter your parcel details</p>

        <hr className="mb-6" />

        {/* Parcel Type */}
        <div className="flex items-center gap-6 mb-6">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="radio"
              name="parcelType"
              className="radio radio-success"
              defaultChecked
            />
            Document
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name="parcelType" className="radio" />
            Not-Document
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-sm font-medium">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered w-full mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Parcel Weight (KG)</label>
            <input
              type="number"
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full mt-1"
            />
          </div>
        </div>

        <hr className="mb-8" />

        {/* Sender & Receiver */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Sender Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-teal-900">Sender Details</h3>

            {/* sender name */}
            <div>
              <label className="text-sm font-medium">Sender Name</label>
              <input
                className="input input-bordered w-full mt-1"
                placeholder="Sender Name"
              />
            </div>

            {/* sender address */}
            <div>
              <label className="text-sm font-medium">Address</label>
              <input
                className="input input-bordered w-full mt-1"
                placeholder="Address"
              />
            </div>

            {/* Sender Phone No */}
            <div>
              <label className="text-sm font-medium">Sender Phone No</label>
              <input
                className="input input-bordered w-full mt-1"
                placeholder="Sender Phone No"
              />
            </div>

            {/* Your District */}
            <div>
              <label className="text-sm font-medium">Your District</label>
              <select className="select select-bordered w-full mt-1">
                <option disabled selected>
                  Select your District
                </option>
                <option>Dhaka</option>
                <option>Gazipur</option>
                <option>Narayanganj</option>
              </select>
            </div>

            {/* Pickup Instruction */}
            <div>
              <label className="text-sm font-medium">Pickup Instruction</label>
              <textarea
                className="textarea textarea-bordered w-full mt-1"
                placeholder="Pickup Instruction"
              ></textarea>
            </div>
          </div>

          {/* Receiver Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-teal-900">Receiver Details</h3>

            {/* Receiver Name */}
            <div>
              <label className="text-sm font-medium">Receiver Name</label>
              <input
                className="input input-bordered w-full mt-1"
                placeholder="Receiver Name"
              />
            </div>

            {/* Receiver Address */}
            <div>
              <label className="text-sm font-medium">Receiver Address</label>
              <input
                className="input input-bordered w-full mt-1"
                placeholder="Address"
              />
            </div>

            {/* Receiver Contact No */}
            <div>
              <label className="text-sm font-medium">Receiver Contact No</label>
              <input
                className="input input-bordered w-full mt-1"
                placeholder="Receiver Contact No"
              />
            </div>

            {/* Receiver District */}
            <div>
              <label className="text-sm font-medium">Receiver District</label>
              <select className="select select-bordered w-full mt-1">
                <option disabled selected>
                  Select your District
                </option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Sylhet</option>
              </select>
            </div>

            {/* Delivery Instruction */}
            <div>
              <label className="text-sm font-medium">
                Delivery Instruction
              </label>
              <textarea
                className="textarea textarea-bordered w-full mt-1"
                placeholder="Delivery Instruction"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-6">
          * Pickup Time 4pm–7pm Approx.
        </p>

        <button className="btn bg-lime-400 hover:bg-lime-500 text-black mt-6">
          Proceed to Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SandParcel;
