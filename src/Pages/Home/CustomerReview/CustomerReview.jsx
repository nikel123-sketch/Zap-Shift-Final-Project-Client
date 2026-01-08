import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CoustomerReviewsCards from "./CoustomerReviewsCards";
import customericon from '../../../assets/banner/customer-top.png'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const CustomerReview = ({ reviewpromise }) => {
  const reviews = use(reviewpromise);

  return (
    <div>
      <div>
        <div className="flex  justify-center">
          <img src={customericon} alt="" />
        </div>
        <h1 className="font-bold text-3xl text-center">
          What our customers are sayings
        </h1>
        <p className="font-semibold text-center mt-3 mb-3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // default
        coverflowEffect={{
          rotate: 30,
          stretch: 50,
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            // sm
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            // md
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            // lg
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {/* Reviews Map */}
        {reviews.map((reviewdata) => (
          <SwiperSlide key={reviewdata.id || reviewdata._id}>
            <CoustomerReviewsCards reviewdata={reviewdata} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
