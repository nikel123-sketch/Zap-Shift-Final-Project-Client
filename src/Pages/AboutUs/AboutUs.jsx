import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-3">
          About Us
        </h1>

        <p className="text-gray-500 max-w-3xl mb-6">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <hr className="mb-6" />

        {/* Tabs */}
        <div className="flex gap-6 mb-6 text-gray-400 font-medium">
          <button className="text-lime-600 border-b-2 border-lime-600 pb-1">
            Story
          </button>
          <button className="hover:text-gray-600">Mission</button>
          <button className="hover:text-gray-600">Success</button>
          <button className="hover:text-gray-600">Team & Others</button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-500 leading-relaxed">
          <p>
            We started with a simple promise — to make parcel delivery fast,
            reliable, and stress-free. Over the years, our commitment to
            real-time tracking, efficient logistics, and customer-first service
            has made us a trusted partner for thousands.
          </p>

          <p>
            Whether it's a personal gift or a time-sensitive business delivery,
            we ensure it reaches its destination — on time, every time.
          </p>

          <p>
            Our growing network and dedicated support team work around the clock
            to deliver excellence across every district we serve.
          </p>
        </div>
      </div>
    </div>
  );
    
};

export default AboutUs;