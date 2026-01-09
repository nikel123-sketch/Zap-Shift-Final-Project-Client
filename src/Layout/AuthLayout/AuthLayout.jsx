import React from 'react';
import Logo from '../../Component/Logo';
import { Outlet } from 'react-router';
import authimg from '../../assets/banner/authImage.png'

const AuthLayout = () => {
    return (
      <div className="max-w-11/12 items-center mx-auto">
        <div>
          <Logo></Logo>
        </div>
        <div className="p-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div>
            <Outlet></Outlet>
          </div>
          <img src={authimg} alt="" />
        </div>
      </div>
    );
};

export default AuthLayout;