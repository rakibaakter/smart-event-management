import Footer from "rc-footer";
import "rc-footer/assets/index.css";

const FooterContainer = () => {
  return (
    <Footer
      columns={[
        {
          icon: (
            <h2 className="font-bold">
              <span className=" text-2xl font-normal text-orange-400">S</span>
              mart
              <span className=" text-4xl font-normal text-orange-400">E</span>
              vent
            </h2>
          ),
        },
      ]}
      bottom="Copyright © 2023 - All right reserved"
    />
    // mountNode,
  );
};

export default FooterContainer;
