import React from 'react';
import Banner from '../../Pages/Home/Banner/Banner';
import Works from '../../Pages/Home/Works/Works';
import OurService from '../../Pages/Home/OurService/OurService';
import Teams from '../../Pages/Home/Teams/Teams';


const HomeLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
           {/* banner */}
           <Banner></Banner>

           {/* works */}
           <Works></Works>

           {/* our service */}
           <OurService></OurService>

           {/* teams */}
           <Teams></Teams>
            
        </div>
    );
};

export default HomeLayout;