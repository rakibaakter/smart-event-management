import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
import Logo from "../Logo";
import profile from "../../assets/profile.jpg";

const Navbar = () => {
  const { user, logOut } = useAuthInfoHooks();
  console.log(user);

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
          to="/schedule"
          className={({ isActive }) => (isActive ? "text-orange-400" : "")}
        >
          Schedule
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
    <div>
      <a className="btn btn-ghost normal-case text-xl mx-auto md:hidden">
        <Logo />
      </a>
      <div className="navbar px-2 md:px-10 lg:px-24">
        <div className="navbar-start ">
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
          <a className="btn btn-ghost normal-case text-xl hidden md:block">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl font-medium">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-3 items-center">
              <span className="flex gap-3 items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL ? user.photoURL : profile}
                  alt=""
                />
                <span>{user.displayName}</span>
              </span>
              <Link onClick={logOut}>
                <a className="text-orange-400 font-semibold text-xl">
                  Sign Out
                </a>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <a className="text-orange-400 font-semibold text-xl">Log In</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
