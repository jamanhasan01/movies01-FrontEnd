import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let lists = (
    <>
      <li>
        <NavLink to={"/"}  className={({ isActive }) => isActive ? "!bg-mainClr !text-white" : ""
  }>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allmovies"}  className={({ isActive }) => isActive ? "!bg-mainClr !text-white" : ""
  }>All Movies</NavLink>
      </li>
      <li>
        <NavLink to={"/addmovies"}  className={({ isActive }) => isActive ? "!bg-mainClr !text-white" : ""
  }>Add Movies</NavLink>
      </li>
      <li>
        <NavLink to={"/favmovies"}  className={({ isActive }) => isActive ? "!bg-mainClr !text-white" : ""
  }>My Favorites </NavLink>
      </li>
      <li>
        <NavLink to={"/fav"}  className={({ isActive }) => isActive ? "!bg-mainClr !text-white" : ""
  }>Favorites </NavLink>
      </li>
   
    </>
  );
  return (
    <div className="">
      <div className="flex max-w-[1240px] mx-auto justify-between py-3 items-center  px-5 md:px-0">
        <div className="">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            {lists}
            </ul>
          </div>
          <Link to={'/'} className="btn  btn-ghost text-xl">MOVIES01</Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {lists}
          </ul>
        </div>
        <div className="">
          <Link to='/signin' className="bg-mainClr px-3 py-2 rounded-lg text-white">SignIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
