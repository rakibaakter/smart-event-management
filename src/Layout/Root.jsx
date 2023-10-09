import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Sticky from "react-stickynode";
import FooterContainer from "../Components/Footer/FooterContainer";

const Root = () => {
  return (
    <div>
      <Sticky enabled={true} top={0} bottomBoundary={1200}>
        <Navbar />
      </Sticky>
      ;
      <Outlet />
      <FooterContainer />
    </div>
  );
};

export default Root;
