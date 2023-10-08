import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-orange-400" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "text-orange-400" : "")}
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed navbar bg-transparent">
      <div className="navbar-start  lg:w-1/3">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-3xl text-orange-400 mt-2 lg:hidden"
          >
            <GiHamburgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-medium"
          >
            {NavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <div>
            <h2 className="font-bold">
              <span className=" text-2xl font-normal text-orange-400">S</span>
              mart
              <span className=" text-4xl font-normal text-orange-400">E</span>
              vent
            </h2>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-medium">
          {NavLinks}
        </ul>
      </div>
      <div className="navbar-end lg:w-1/3">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
