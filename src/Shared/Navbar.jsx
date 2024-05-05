import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../assets/Provider/AuthProvider";

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log("logout success"))
      .then((err) => console.log(err));
  };
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " bg-[#b32424] focus:bg-[#b32424]" : " "
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? " bg-[#b32424] focus:bg-[#b32424]" : " "
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? " bg-[#b32424] focus:bg-[#b32424]" : " "
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? " bg-[#b32424] focus:bg-[#b32424]" : " "
          }
        >
          Blog
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/mybookings"
            className={({ isActive }) =>
              isActive ? " bg-[#b32424] focus:bg-[#b32424]" : " "
            }
          >
            Mybookings
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? " bg-[#b32424] focus:bg-[#b32424]" : " "
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">JanathaGarage</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menu}</ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn btn-sm btn-outline btn-success">Appoinment</a>
          {user ? (
            <div className="dropdown dropdown-hover ">
              <div tabIndex={0} role="button" className=" m-1 avatar">
                {" "}
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu absolute right-2 w-24 p-2 shadow bg-base-100 rounded-box"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn bg-red-500 text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary">
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
