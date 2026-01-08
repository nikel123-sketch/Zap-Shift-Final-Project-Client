import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
const Banner = () => {

    
    return (
      <div>
        <Carousel interval={2000} infiniteLoop={true} autoPlay={true}>
          {/* img 1 */}
          <div>
            <img src={banner1} />

            <div
              className="absolute top-100 left-39 
                 -translate-x-1/2 -translate-y-1/2
                "
            >
              <div className="gap-4 flex">
                <button className="btn bg-[#caeb66]">Track Your Parcel</button>
                <button className="btn bg-[#caeb66]">Track Your Parcel</button>
              </div>
            </div>
          </div>

          {/* img 2 */}
          <div>
            <img src={banner2} />

            <div
              className="absolute top-100 left-39 
                 -translate-x-1/2 -translate-y-1/2
                "
            >
              <div className="gap-4 flex">
                <button className="btn bg-[#caeb66]">Track Your Parcel</button>
                <button className="btn bg-[#caeb66]">Track Your Parcel</button>
              </div>
            </div>
          </div>

          {/* img 3 */}
          <div>
            <img src={banner3} />

            <div
              className="absolute top-100 left-39 
                 -translate-x-1/2 -translate-y-1/2
                "
            >
              <div className="gap-4 flex">
                <button className="btn bg-[#caeb66]">Track Your Parcel</button>
                <button className="btn bg-[#caeb66]">Track Your Parcel</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
};

export default Banner;