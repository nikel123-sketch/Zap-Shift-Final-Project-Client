import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../Hooks/useAuth';

const Register = () => {
  // firebase----
  const { createuser,seterror,error } = useAuth();
  // show password---
  const [showPassword, setShowPassword] = useState(false);
  // react form hook----\
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // registerformhendle---
  const registerformhendle=(data)=>{
    console.log(data)
    // firebase----
    createuser(data.email,data.password)
    .then(res=>{
      const registerUser=res.user;
      console.log(registerUser)
      seterror(null)
      reset()
      
    })
    .catch(err=>{
      const error = err.message;
      seterror(error)
    })

  }
  return (
    <div>
      {/* register form */}
      <form onSubmit={handleSubmit(registerformhendle)}>
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />

          {/* name errors */}
          {errors.name?.type === "required" && (
            <p className="font-bold text-red-600">Name is required</p>
          )}

          {/* photo */}
          <label className="label">Photo</label>

          <input
            type="file"
            className="file-input file-input-primary"
            placeholder="Your photo"
            {...register("photo", { required: true })}
          />

          {/* photo errors */}
          {errors.photo?.type === "required" && (
            <p className="font-bold text-red-600">Photo is required</p>
          )}

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input "
            placeholder="Email"
            {...register("email", { required: true })}
          />

          {/* email errors */}
          {errors.email?.type === "required" && (
            <p className="font-bold text-red-600">Email is required</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
              })}
            />

            {/* passwords errors */}
            {errors.password?.type === "required" && (
              <p className="font-bold text-red-600">Password is required</p>
            )}

            {/* ---minlength */}
            {errors.password?.type === "minLength" && (
              <p className="font-bold text-red-600">
                Password must be at least 6 characters
              </p>
            )}

            {/* spacial characters errors */}
            {errors.password?.type === "pattern" && (
              <p className="font-bold text-red-600">
                {" "}
                password must be uppercase, lowercase, number & special
                character
              </p>
            )}

            {/* eye btn */}
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* error */}
          {error?<p className='font-bold text-red-600'>{error}</p>:''}
          {/* register Button */}
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          All Radey Have an Account{" "}
          <NavLink
            to={"/auth/login"}
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