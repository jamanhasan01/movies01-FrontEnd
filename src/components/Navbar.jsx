import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleSignOut } = useContext(authContext);
  const [isScrolled, setIsScrolled] = useState(false);
  let location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lists = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "!bg-mainClr !text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allmovies"}
          className={({ isActive }) =>
            isActive ? "!bg-mainClr !text-white" : ""
          }
        >
          All Movies
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/addmovies"}
            className={({ isActive }) =>
              isActive ? "!bg-mainClr !text-white" : ""
            }
          >
            Add Movies
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={"/favmovies"}
            className={({ isActive }) =>
              isActive ? "!bg-mainClr !text-white" : ""
            }
          >
            My Favorites
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/news"}
          className={({ isActive }) =>
            isActive ? "!bg-mainClr !text-white" : ""
          }
        >
          News
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`border-b border-gray-500 fixed left-0 top-0 w-full z-10 ${
        isScrolled ? "bg-gray-600" : "bg-gray-800"
      } transition-all duration-300`}
    >
      <div className="flex max-w-[1240px] mx-auto justify-between py-3 items-center px-5 md:px-0">
        <div>
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
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {lists}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            MOVIES01
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{lists}</ul>
        </div>
        
        {user ? (
          <div className="flex justify-center items-center gap-3">
             <Link to={'/profile'}>
            <div className="avatar">
             
              <div title={`${user?.displayName}`} className={`ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2`}>
                <img src={user?.photoURL} />
            </div>
              </div></Link>
            <Link
              onClick={handleSignOut}
              className="bg-mainClr px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black/90"
            >
              Log Out
            </Link>

            
          </div>
        ) : (
          <div>
            {location.pathname !== "/signin" ? (
              <Link
                to="/signin"
                className="bg-mainClr px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black/90"
              >
                SignIn
              </Link>
            ) : (
              <Link
                to="/signup"
                className="bg-mainClr px-3 py-2 rounded-lg text-white hover:bg-white hover:text-black/90"
              >
                Register
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
