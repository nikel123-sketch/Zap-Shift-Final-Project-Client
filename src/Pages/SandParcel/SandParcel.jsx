import React from "react";
import { useForm } from "react-hook-form";

const SandParcel = () => {
    // from react hooks--
   const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();


    //  from hendle--
    const formhendle=(data)=>{
        console.log(data)
    }
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        {/* Header */}
        <h1 className="text-2xl font-bold text-teal-900 mb-2">Send A Parcel</h1>
        <p className="text-sm text-teal-800 mb-6">Enter your parcel details</p>

        <hr className="mb-6" />

        <form onSubmit={handleSubmit(formhendle)}>
          {/* Parcel Type */}
          <div className="flex items-center gap-6 mb-6">
            {/* Document */}
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="Document"
                {...register("parcelType", { required: true })}
                className="radio radio-success"
              />
              Document
            </label>

            {/* Not Document */}
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                value="NotDocument"
                {...register("parcelType", { required: true })}
                className="radio"
              />
              Not-Document
            </label>

            {/* Error */}
            {errors.parcelType && (
              <p className="text-red-600 font-bold mt-1">
                Parcel Type must be required
              </p>
            )}
          </div>

          {/* Parcel Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm font-medium">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                className="input input-bordered w-full mt-1"
                {...register("parcelName", { required: true })}
              />

              {errors.parcelName?.type === "required" && (
                <p className="font-bold text-red-600"> parcel name must be required</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Parcel Weight (KG)</label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                className="input input-bordered w-full mt-1"
                {...register("parcelweight", { required: true })}
              />
                {errors.parcelweight?.type === "required" && (
                <p className="font-bold text-red-600"> parcel weight must be required</p>
              )}
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
                  {...register("sanderName", { required: true })}
                />

                {errors.sanderName?.type === "required" && (
                  <p className="font-bold text-red-600">
                    SenderName must be required
                  </p>
                )}
              </div>

              {/* sender address */}
              <div>
                <label className="text-sm font-medium">Address</label>
                <input
                  className="input input-bordered w-full mt-1"
                  placeholder="Address"
                  {...register("SanderAddress", { required: true })}
                />

                {errors.SanderAddress?.type === "required" && (
                  <p className="font-bold text-red-600">
                    SenderAddress must be required
                  </p>
                )}
              </div>

              {/* Sender Phone No */}
              <div>
                <label className="text-sm font-medium">Sender Phone No</label>
                <input
                  className="input input-bordered w-full mt-1"
                  placeholder="Sender Phone No"
                  {...register("SenderPhone", { required: true })}
                />
                {errors.SenderPhone?.type === "required" && (
                  <p className="font-bold text-red-600">
                    SanderPhone must be required
                  </p>
                )}
              </div>

              {/* Your District */}
              <div>
                <label className="text-sm font-medium">Your District</label>
                <select
                  className="select select-bordered w-full mt-1"
                  {...register("SenderDistrict", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your District
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Narayanganj">Narayanganj</option>
                </select>

                {errors.SenderDistrict && (
                  <p className="text-red-600 font-bold">
                    District must be required
                  </p>
                )}
              </div>

              {/* Pickup Instruction */}
              <div>
                <label className="text-sm font-medium">
                  Pickup Instruction
                </label>
                <textarea
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Pickup Instruction"
                  {...register("pickupInstruction", { required: true })}
                ></textarea>
                {errors.pickupInstruction && (
                  <p className="text-red-600 font-bold">
                    Pickup Instruction must be required
                  </p>
                )}
              </div>
            </div>

            {/* Receiver Details */}
            <div className="space-y-4">
              <h3 className="font-semibold text-teal-900">Receiver Details</h3>

              {/* Receiver name */}
              <div>
                <label className="text-sm font-medium">Receiver Name</label>
                <input
                  className="input input-bordered w-full mt-1"
                  placeholder="Receiver Name"
                  {...register("ReceiverName", { required: true })}
                />

                {errors.ReceiverName?.type === "required" && (
                  <p className="font-bold text-red-600">
                    ReceiverName must be required
                  </p>
                )}
              </div>

              {/* Receiver address */}
              <div>
                <label className="text-sm font-medium">Address</label>
                <input
                  className="input input-bordered w-full mt-1"
                  placeholder="Receiver Address"
                  {...register("ReceiverAddress", { required: true })}
                />

                {errors.ReceiverAddress?.type === "required" && (
                  <p className="font-bold text-red-600">
                    ReceiverAddress must be required
                  </p>
                )}
              </div>

              {/* Receiver Phone No */}
              <div>
                <label className="text-sm font-medium">Receiver Phone No</label>
                <input
                  className="input input-bordered w-full mt-1"
                  placeholder="Receiver Phone No"
                  {...register("ReceiverPhone", { required: true })}
                />
                {errors.ReceiverPhone?.type === "required" && (
                  <p className="font-bold text-red-600">
                    ReceiverPhone must be required
                  </p>
                )}
              </div>

              {/* Receiver District */}
              <div>
                <label className="text-sm font-medium">Receiver District</label>
                <select
                  className="select select-bordered w-full mt-1"
                  {...register("ReceiverDistrict", { required: true })}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your District
                  </option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Gazipur">Gazipur</option>
                  <option value="Narayanganj">Narayanganj</option>
                </select>

                {errors.ReceiverDistrict && (
                  <p className="text-red-600 font-bold">
                    Receiver District must be required
                  </p>
                )}
              </div>

              {/*Receiver Pickup Instruction */}
              <div>
                <label className="text-sm font-medium">
                  Receiver Pickup Instruction
                </label>
                <textarea
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Pickup Instruction"
                  {...register("pickupInstruction", { required: true })}
                ></textarea>
                {errors.pickupInstruction && (
                  <p className="text-red-600 font-bold">
                    Pickup Instruction must be required
                  </p>
                )}
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
        </form>
      </div>
    </div>
  );
};

export default SandParcel;
