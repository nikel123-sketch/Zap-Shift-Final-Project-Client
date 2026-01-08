import React from "react";
import locationMerchant from "../../../assets/banner/location-merchant.png";
const Merchant = () => {
  return (
    <div className="">
      <section className="flex items-center justify-between p-10 bg-[#03373d] rounded-2xl shadow-2xl mb-5">
        <div>
          <h1 className="font-bold text-3xl text-white">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h1>
          <p className="mt-2 mb-2 text-[#dadada]">
            We offer the lowest delivery charge with the highest value along
            with <br /> 100% safety of your product. Pathao courier delivers
            your parcels in every <br /> corner of Bangladesh right on time.
          </p>
          {/* btn */}
          <div>
            <div className="gap-4 flex">
              <button className="btn bg-[#caeb66]">Become a Merchantl</button>
              <button className="btn bg-[#caeb66]">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src={locationMerchant} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Merchant;
