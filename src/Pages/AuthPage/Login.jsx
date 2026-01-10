import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import useAuth from "../../Hooks/useAuth";
import { NavLink, useLocation, useNavigate } from "react-router";
import GoogleAuth from "../../Component/GoogleAuth/GoogleAuth";

const Login = () => {
  //  location--
  const location = useLocation();
  console.log(location);

  const navigate=useNavigate();

  // firebase--
  const { signinUser, seterror, error } = useAuth();
  // showPassword--
  const [showPassword, setshowPassword] = useState(false);

  // react form hooks ---
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // loginformhendle----
  const loginformhendle = (data) => {
    console.log(data);

    // firebase--
    signinUser(data.email, data.password)
      .then((res) => {
        const loginUser = res.user;
        console.log(loginUser);
        reset();
        navigate(location?.state ||'/')
      })
      .catch((err) => {
        const error = err.message;
        seterror(error);
      });
  };
  return (
    <div>
      {/* login form */}
      <form onSubmit={handleSubmit(loginformhendle)}>
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
            <p className="font-bold text-red-600">Name must be required</p>
          )}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          {/* email errors */}
          {errors.email?.type === "required" && (
            <p className="font-bold text-red-600">Email must be required</p>
          )}

          {/* password and eye btn */}
          <div className="relative">
            {/* password */}
            <label className="label">Password</label>
            <input
              type={!showPassword ? "text" : "password"}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
              })}
            />

            {/* password errors */}

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
              onClick={() => setshowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          {/* forget btn */}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          {/* error */}
          {error ? <p className="font-bold text-red-600">{error}</p> : ""}
          {/* login btn */}
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>

        <p>
          Have an New Account{" "}
          <NavLink
            to={"/auth/register"}
            className="font-bold text-green-400 underline"
          >
            register
          </NavLink>
        </p>
      </form>
      {/* google btn */}
      <div>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};

export default Login;
