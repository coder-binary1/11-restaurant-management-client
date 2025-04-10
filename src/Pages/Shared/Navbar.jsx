import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";
import ThemeSwitcher from "../../Context/ThemeContext/ThemeSwitcher";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const location = useLocation();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-red-500 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFoods"
          className={({ isActive }) =>
            isActive ? "bg-red-500 text-white" : ""
          }
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive ? "bg-red-500 text-white" : ""
          }
        >
          Gallery
        </NavLink>
      </li>
    </>
  );

  const profileLinks = (
    <>
      <li>
        <Link to="/myFood">My Foods</Link>
      </li>
      <li>
        <Link to="/addFood">Add Food</Link>
      </li>
      <li>
        <Link to="/myOrder">My Order</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div
      className={
        location.pathname === "/"
          ? "navbar max-w-7xl mx-auto absolute left-0 right-0 z-10"
          : "navbar max-w-7xl mx-auto"
      }
    >
      <div className="navbar-start">
        <div
          className={
            location.pathname === "/" ? "dropdown text-white" : "dropdown"
          }
        >
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <button className=" btn btn-ghost ">
            <img className="w-8" src={logo} alt="logo" />
            <h2
              className={
                location.pathname === "/"
                  ? "text-3xl font-bold font-dancing-script text-white"
                  : "text-3xl font-bold font-dancing-script"
              }
            >
              Grillix
            </h2>
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={
            location.pathname === "/"
              ? "menu menu-horizontal px-1 text-white"
              : "menu menu-horizontal px-1"
          }
        >
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeSwitcher></ThemeSwitcher>
        {user ? (
          <div className="dropdown ">
            <div
              tabIndex={0}
              className="btn bg-transparent border-0 shadow-none"
            >
              <img className="rounded-full w-10" src={user?.photoURL} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 shadow-sm  right-0 w-36"
            >
              {profileLinks}
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn btn-sm btn-error text-white mt-4"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link to="/register">
              <button className="btn btn-soft bg-red-500 hover:bg-black border-0 text-white transition-all duration-500 mr-2">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="btn btn-soft bg-red-500 hover:bg-black border-0 text-white transition-all duration-500">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
