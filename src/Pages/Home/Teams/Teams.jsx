import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/amazon_vector.png'
import logo3 from '../../../assets/brands/casio.png'
import logo4 from '../../../assets/brands/moonstar.png'
import logo5 from '../../../assets/brands/randstad.png'
import logo6 from '../../../assets/brands/star.png'
import logo7 from '../../../assets/brands/start_people.png'



// logos--
const logos=[logo1,logo2,logo3,logo4,logo5,logo6,logo7]

const Teams = () => {
  return (
    <div className="mb-3 mt-3">
      <h1 className="mt-5 mb-3 font-bold text-3xl text-center">
        We've helped thousands of sales teams
      </h1>

      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >

        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Teams;
