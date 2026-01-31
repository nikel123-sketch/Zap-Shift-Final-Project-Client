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

      {user &&<>
      <li>
        <Link to={'/pricing'}>Pricing</Link>
      </li>
      <li>
        <Link to={'/sandparcel'}>SandParcel</Link>
      </li>
      <li>
        <Link to={'/dasbord'}>Dashbord</Link>
      </li>
      </>}
      
      
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
      <div className="navbar bg-base-100 shadow-md border-b sticky top-0 z-50 px-4 backdrop-blur">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-base-200 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-50 mt-3 w-56 p-3 shadow-lg gap-2"
            >
              {links}
            </ul>
          </div>

          <div className="ml-2">
            <Logo />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 font-medium">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <Link to={"/auth/login"}>
              <button
                onClick={logoutbtnhendle}
                className="btn btn-error rounded-full px-6 hover:-translate-y-1 transition-all duration-200"
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link
              to={"auth/login"}
              className="btn btn-primary rounded-full px-6 hover:-translate-y-1 transition-all duration-200"
            >
              Login
            </Link>
          )}

          <Link
            to={"/barider"}
            className="btn btn-accent rounded-full px-6 hover:-translate-y-1 transition-all duration-200"
          >
            BaRider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
