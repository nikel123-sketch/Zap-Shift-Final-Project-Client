import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Login = () => {
  // showPassword--
  const [showPassword,setshowPassword]=useState(false);
  return (
    <div>
      {/* login form */}
      <form>
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Your Name"
            //   {...register("name", { required: true })}
          />

          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          {/* password and eye btn */}
          <div className="relative">
            {/* password */}
            <label className="label">Password</label>
            <input
              type={!showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
            />

            {/* eye btn */}

            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setshowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          {/* forget btn */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* login btn */}
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p>
          Have an New Account{" "}
          <NavLink to={"/register"} className="font-bold text-green-400 underline">
            register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;