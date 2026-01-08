import React from 'react';
import Banner from '../../Pages/Home/Banner/Banner';
import Works from '../../Pages/Home/Works/Works';
import OurService from '../../Pages/Home/OurService/OurService';
import Teams from '../../Pages/Home/Teams/Teams';
import Tracking from '../../Pages/Home/Tracking/Tracking';
import Merchant from '../../Pages/Home/Merchant/Merchant';
import CustomerReview from '../../Pages/Home/CustomerReview/CustomerReview';

const reviewpromise=fetch('/public/reviews.json')
.then(res=>res.json())
const HomeLayout = () => {
    return (
      <div className="max-w-11/12 mx-auto">
        {/* banner */}
        <Banner></Banner>

        {/* works */}
        <Works></Works>

        {/* our service */}
        <OurService></OurService>

        {/* teams */}
        <Teams></Teams>

        {/* tracking */}
        <Tracking></Tracking>

        {/* CustomerReview */}
        <CustomerReview reviewpromise={reviewpromise}></CustomerReview>

        {/* Merchant */}
        <Merchant></Merchant>
      </div>
    );
};

export default HomeLayout;