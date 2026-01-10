import React from "react";
import { Link } from "react-router";
import Logo from "../../Component/Logo";
import useAuth from "../../Hooks/useAuth";


const Navber = () => {
  const { user, singOutUser } = useAuth();
  

  // all path----
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link to={"/coverage"}>Coverage</Link>
      </li>
      <li>
        <Link to={"/aboutus"}>About Us</Link>
      </li>
      <li>
        <Link>Pricing</Link>
      </li>
      <li>
        <Link>SandParcel</Link>
      </li>
      <li>
        <Link>Be a Rider</Link>
      </li>
    </>
  );

  // logoutbtnhendle--
  const logoutbtnhendle = () => {
    singOutUser()
      .then(() => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* btn */}
        {/* <div className="navbar-end">
          {user? }
        </div> */}
        <div className="navbar-end">
          {user ? (
            <button onClick={logoutbtnhendle} className="btn btn-error">
              Logout
            </button>
          ) : (
            <Link to={"auth/login"} className="btn btn-primary">
              Login
            </Link>
          )}

          <Link to={"/barider"} className="btn btn-accent ml-4">
            BaRider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
