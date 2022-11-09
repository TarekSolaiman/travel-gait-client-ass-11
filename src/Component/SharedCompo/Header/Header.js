import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import logo from "../../../images/logo.png";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.warning("Success fully Logout", {
          autoClose: 1000,
        });
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex justify-between container mx-auto">
        <div className="">
          <Link
            to="/"
            className="flex justify-start items-center text-3xl text-orange-500 font-bold"
          >
            <img className="w-16 mr-2" src={logo} alt="" />
            <h1>TRAVEL GAIT</h1>
          </Link>
        </div>

        <div className="flex items-end">
          <div className="hidden lg:block">
            <NavLink
              className="btn btn-ghost normal-case text-lg"
              to="/services"
            >
              Services
            </NavLink>

            <NavLink className="btn btn-ghost normal-case text-lg" to="/blog">
              Blog
            </NavLink>

            {user?.email ? (
              <>
                <NavLink
                  className="btn btn-ghost normal-case text-lg"
                  to="/addservices"
                >
                  Add Services
                </NavLink>
                <NavLink
                  className="btn btn-ghost normal-case text-lg"
                  to="/reviows"
                >
                  My Reviows
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="btn btn-ghost normal-case text-lg"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  className="btn btn-ghost normal-case text-lg"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn btn-ghost normal-case text-lg"
                  to="/signin"
                >
                  Signin
                </NavLink>
              </>
            )}
          </div>
          <div className="dropdown dropdown-bottom dropdown-end block lg:hidden">
            <label tabIndex={0} className="btn m-1">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className="btn btn-ghost normal-case text-lg"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="btn btn-ghost normal-case text-lg"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <NavLink
                      className="btn btn-ghost normal-case text-lg"
                      to="/addservices"
                    >
                      Add Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost normal-case text-lg"
                      to="/reviows"
                    >
                      My Reviows
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-ghost normal-case text-lg"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      className="btn btn-ghost normal-case text-lg"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn btn-ghost normal-case text-lg"
                      to="/signin"
                    >
                      Signin
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
