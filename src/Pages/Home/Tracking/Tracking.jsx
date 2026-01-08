import React from 'react';
import livetrakingicon from '../../../assets/banner/live-tracking.png'
import delivery from "../../../assets/banner/safe-delivery.png";
const Tracking = () => {
    return (
      <div>
        <div className="p-5  gap-5">
          {/* fast */}
          <section className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-xl p-6 gap-6 ">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src={livetrakingicon}
                alt="Live parcel tracking"
                className="max-w-sm w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="font-bold text-3xl mb-4">Live Parcel Tracking</h1>
              <p className="font-semibold text-[#606060] ">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </section>

          {/* sss */}
          <section className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-xl p-6 gap-6 mt-5 mb-5">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src={delivery}
                alt="Live parcel tracking"
                className="max-w-sm w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="font-bold text-3xl mb-4">Live Parcel Tracking</h1>
              <p className="font-semibold text-[#606060]">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </section>

          {/* tt */}
          <section className="flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-xl p-6 gap-6">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src={delivery}
                alt="Live parcel tracking"
                className="max-w-sm w-full"
              />
            </div>

            {/* Content */}
            <div>
              <h1 className="font-bold text-3xl mb-4">Live Parcel Tracking</h1>
              <p className="font-semibold text-[#606060] ">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
};

export default Tracking;