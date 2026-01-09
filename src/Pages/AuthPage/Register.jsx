import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Register = () => {
    // show password---
    const [showPassword ,setShowPassword]=useState(false)
    return (
      <div>
        {/* register form */}
        <form >
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Your Name"
              
            />

            

            {/* photo */}
            <label className="label">Photo</label>

            <input
              type="file"
              className="file-input file-input-primary"
              placeholder="Your photo"
              
            />

            

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input "
              placeholder="Email"
              
            />
            

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
               
              />

              {/* eye btn */}
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            
            {/* Forgot Password */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* register Button */}
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            All Radey Have an Account{" "}
            <NavLink
              to={"/login"}
              className="font-bold text-green-400 underline"
            >
              Login
            </NavLink>
          </p>
        </form>
      </div>
    );
};

export default Register;