import { NavLink } from "react-router";

import Logo from "../Components/Logo/Logo";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = UseAuth();

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed!",
          text: `${error.message}`,
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 ${isActive ? "border-b-2 border-primary" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 ${isActive ? "border-b-2 border-primary" : ""}`
          }
          to="/thana"
        >
          Thana
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 ${isActive ? "border-b-2 border-primary" : ""}`
          }
          to="/touristPlaces"
        >
          Tourist Places
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 ${isActive ? "border-b-2 border-primary" : ""}`
          }
          to="/famousPeople"
        >
          Famous People
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 ${isActive ? "border-b-2 border-primary" : ""}`
          }
          to="/famousFood"
        >
          Famous Food
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `pb-1 ${isActive ? "border-b-2 border-primary" : ""}`
          }
          to="/moreAbout"
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
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
      <div className="navbar-end gap-2">
        {user ? (
          <button
            onClick={handleLogout}
            className="btn hover:scale-105 btn-primary"
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register">
              <button className="btn btn-secondary hover:scale-105">
                Register
              </button>
            </NavLink>
            <NavLink to="/login">
              <button className="btn btn-primary hover:scale-105">Login</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
