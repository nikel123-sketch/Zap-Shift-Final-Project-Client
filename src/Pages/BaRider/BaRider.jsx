import React from "react";
import img from '../../assets/banner/agent-pending.png'
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../../Hooks/AxiosHooks/useAxiosSecure";
import Swal from "sweetalert2";
const BaRider = () => {
  const axiosSecure=useAxiosSecure()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const allCuntry = useLoaderData();
  // console.log(allCuntry);

  // sender region --
  const riderRegion = watch("RiderRegion");
  // console.log(riderRegion);

  const regionDuplicate = allCuntry.map((cuntry) => cuntry.region);

  const regions = [...new Set(regionDuplicate)];

  // region district--
  const districtbyregion = (region) => {
    const regiondistrict = allCuntry.filter((c) => c.region === region);
    // console.log(regiondistrict)
    const districts = regiondistrict.map((d) => d.district);
    return districts;
  };

  // form hendle--
  const formHendle = (data) => {
    console.log(data);

    const riderinfo = {
      name: data.name,
      BikeModelAndYear: data.BikeModelAndYear,
      BikeRegistrationNumber: data.BikeRegistrationNumber,
      DrivingLicenseNumber: data.DrivingLicenseNumber,
      RiderRegion: data.RiderRegion,
      Riderdistrict: data.Riderdistrict,
      email: data.email,
      nidNumber: data.nidNumber,
      phoneNumber: data.phoneNumber,
      yourself: data.yourself,
    };
    // data sand the database---
    axiosSecure.post('/riders',riderinfo)
    .then(result=>{
       if(result.data.insertedId){
                  // reset()
                  
                 Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: "your Aplication has been submited",
                   showConfirmButton: false,
                   timer: 2500,
                 });
    }})
  };

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
        <form onSubmit={handleSubmit(formHendle)} className="space-y-3">
          {/* name */}
          {/* _____________________ */}
          <label className="block">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            {...register("name", { required: true })}
          />

          {errors.name?.type === "required" && (
            <p className="font-bold text-red-600">Name must be required</p>
          )}
          {/* _________________________________________ */}

          {/* ___________Driving License Number___________ */}
          <label className="block">Driving License Number</label>
          <input
            type="number"
            placeholder="Driving License Number"
            className="input input-bordered w-full"
            {...register("DrivingLicenseNumber", { required: true })}
          />
          {errors.DrivingLicenseNumber?.type === "required" && (
            <p className="font-bold text-red-600">
              Driving License Number must be required
            </p>
          )}

          {/* _________email_________________________ */}
          <label className="block">Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            {...register("email", { required: true })}
          />

          {errors.email?.type === "required" && (
            <p className="font-bold text-red-600">email must be required</p>
          )}

          {/* _______________________________________________ */}

          {/* ____________________Nid Number___________ */}
          <label className="block">NID No</label>
          <input
            type="number"
            placeholder="NID No"
            className="input input-bordered w-full"
            {...register("nidNumber", { required: true })}
          />

          {errors.nidNumber?.type === "required" && (
            <p className="font-bold text-red-600">
              Nid Number must be required
            </p>
          )}

          {/* _________phone number_________ */}
          <label className="block">Phone Number</label>
          <input
            type="number"
            placeholder="Phone Number"
            className="input input-bordered w-full"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber?.type === "required" && (
            <p className="font-bold text-red-600">
              Phone Number must be required
            </p>
          )}

          {/* ________________________________ */}

          {/* __________bike model and year__________ */}
          <label className="block">Bike Brand Model and Year</label>
          <input
            type="text"
            placeholder="Bike Brand Model and Year"
            className="input input-bordered w-full"
            {...register("BikeModelAndYear", { required: true })}
          />
          {errors.BikeModelAndYear?.type === "required" && (
            <p className="font-bold text-red-600">
              Bike Model And Year must be required
            </p>
          )}

          {/* ____________________________ */}

          {/* ________bike registration number________ */}
          <label className="block">Bike Registration Number</label>
          <input
            type="text"
            placeholder="Bike Registration Number"
            className="input input-bordered w-full"
            {...register("BikeRegistrationNumber", { required: true })}
          />
          {errors.BikeRegistrationNumber?.type === "required" && (
            <p className="font-bold text-red-600">
              Bike Registration Number must be required
            </p>
          )}
          {/* __________________________ */}

          {/* ****************************** */}
          {/* Your Region */}
          <div>
            <label className="text-sm font-medium">Your Region</label>
            <select
              className="select select-bordered w-full mt-1"
              {...register("RiderRegion", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Select your Region
              </option>

              {/* map region */}
              {regions.map((region, index) => (
                <option value={region} key={index}>
                  {region}
                </option>
              ))}
            </select>

            {errors.RiderRegion?.type === "required" && (
              <p className="text-red-600 font-bold">
                Rider Region must be required
              </p>
            )}
          </div>

          {/* Your district */}
          <div>
            <label className="text-sm font-medium">Your district</label>
            <select
              className="select select-bordered w-full mt-1"
              {...register("Riderdistrict", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                Select your district
              </option>

              {/* map district */}
              {districtbyregion(riderRegion).map((region, index) => (
                <option value={region} key={index}>
                  {region}
                </option>
              ))}
            </select>

            {errors.Riderdistrict?.type === "required" && (
              <p className="text-red-600 font-bold">
                District must be required
              </p>
            )}
          </div>
          {/* yourself */}
          <label className="block">Tell Us About Yourself</label>
          <textarea
            placeholder="Tell Us About Yourself"
            className="textarea textarea-bordered w-full"
            {...register("yourself", { required: true })}
          ></textarea>
          {errors.yourself?.type === "required" && (
            <p className="font-bold text-red-600">yourself must be required</p>
          )}

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
};;;

export default BaRider;
