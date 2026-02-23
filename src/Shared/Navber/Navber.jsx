import React from "react";
import { NavLink, Link, useNavigate } from "react-router";
import Logo from "../../Component/Logo";
import useAuth from "../../Hooks/useAuth";

const Navber = () => {
  const { user, singOutUser } = useAuth();
  const navigate = useNavigate();

  // active link style
  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-base-200 ${
      isActive
        ? "text-primary font-semibold after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary"
        : "text-base-content"
    }`;

  // logout handle
  const logoutbtnhendle = () => {
    singOutUser()
      .then(() => {
        navigate("/auth/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-base-100/80 backdrop-blur-md shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-64 rounded-xl bg-base-100 shadow-xl p-3 space-y-1 z-[999]"
            >
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/services" className={navLinkClass}>
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink to="/coverage" className={navLinkClass}>
                  Coverage
                </NavLink>
              </li>

              <li>
                <NavLink to="/aboutus" className={navLinkClass}>
                  About Us
                </NavLink>
              </li>

              {user && (
                <>
                  <li>
                    <NavLink to="/pricing" className={navLinkClass}>
                      Pricing
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/sandparcel" className={navLinkClass}>
                      Send Parcel
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dasbord" className={navLinkClass}>
                      Dashboard
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <div className="ml-2">
            <Logo />
          </div>
        </div>

        {/* CENTER DESKTOP */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 overflow-hidden">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/coverage" className={navLinkClass}>
                Coverage
              </NavLink>
            </li>

            <li>
              <NavLink to="/aboutus" className={navLinkClass}>
                About Us
              </NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/pricing" className={navLinkClass}>
                    Pricing
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/sandparcel" className={navLinkClass}>
                    Send Parcel
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/dasbord" className={navLinkClass}>
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-2">
          {user ? (
            <button
              onClick={logoutbtnhendle}
              className="btn btn-error btn-sm md:btn-md rounded-full px-5 hover:scale-105 transition-all duration-200 shadow"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary btn-sm md:btn-md rounded-full px-5 hover:scale-105 transition-all duration-200 shadow"
            >
              Login
            </Link>
          )}

          <Link
            to="/barider"
            className="btn btn-accent btn-sm md:btn-md rounded-full px-5 hover:scale-105 transition-all duration-200 shadow"
          >
            Be Rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
