import React from "react";
import icon from '../../../assets/banner/bookingIcon.png'
const Works = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl mt-1 ml-5 ">How it Works</h1>
      </div>

      {/* parent div */}

      <div
        className="
            flex flex-col
            sm:flex-row 
            gap-2 sm:gap-4 md:gap-6 
            p-3 sm:p-4 md:p-6 lg:p-10
            "
      >
        {/* card 1--- */}
        <div className="bg-[#ffffffb3] p-4 rounded-2xl hover:bg-blue-50">
          <img src={icon} alt="" />
          <h1 className="font-bold text-3xl">Booking Pick & Drop</h1>
          <p className="font-bold text-[#606060]">
            From personal packages to business shipments <br /> we deliver on
            time, every time.
          </p>
        </div>

        {/* card 2 */}
        <div className="bg-[#ffffffb3] p-4 rounded-2xl hover:bg-blue-50">
          <img src={icon} alt="" />
          <h1 className="font-bold text-3xl">Booking Pick & Drop</h1>
          <p className="font-bold text-[#606060]">
            From personal packages to business shipments <br /> we deliver on
            time, every time.
          </p>
        </div>

        {/* card 3 */}
        <div className="bg-[#ffffffb3] p-4 rounded-2xl hover:bg-blue-50">
          <img src={icon} alt="" />
          <h1 className="font-bold text-3xl">Booking Pick & Drop</h1>
          <p className="font-bold text-[#606060]">
            From personal packages to business shipments <br /> we deliver on
            time, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
