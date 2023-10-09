import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Sticky from "react-stickynode";

const Root = () => {
  return (
    <div>
      <Sticky enabled={true} top={0} bottomBoundary={1200}>
        <Navbar />
      </Sticky>
      ;
      <Outlet />
    </div>
  );
};

export default Root;
