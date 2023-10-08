import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

const Root = () => {
  return (
    <div>
      <div className="w-full lg:w-4/5 mx-auto">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
