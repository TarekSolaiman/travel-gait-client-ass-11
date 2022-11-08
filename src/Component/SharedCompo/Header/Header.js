import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className=" container mx-auto">
        <div className="navbar-start">
          <div className="navbar-center">
            <NavLink to="/" className="">
              <img className="w-16" src={logo} alt="" />
            </NavLink>
          </div>
        </div>

        <div className="navbar-end flex items-end">
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
            <NavLink
              className="btn btn-ghost normal-case text-lg"
              to="/reviows"
            >
              My Reviows
            </NavLink>
            <NavLink className="btn btn-ghost normal-case text-lg" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-ghost normal-case text-lg" to="/signin">
              Signin
            </NavLink>
            <button className="btn btn-ghost normal-case text-lg">
              Log Out
            </button>
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
                <NavLink>Homepage</NavLink>
              </li>
              <li>
                <NavLink>Portfolio</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
