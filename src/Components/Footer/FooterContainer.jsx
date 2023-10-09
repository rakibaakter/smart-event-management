import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import Logo from "../Logo";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import ServiceList from "../Services/ServiceList";
import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const FooterContainer = () => {
  const { services } = useAuthInfoHooks();

  return (
    <footer className="bg-black py-16 px-2 md:px-10 lg:px-28 text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 ">
        <div className=" space-y-3">
          <Logo />
          <p className="mt-3 italic ">
            {`"Client Satisfaction Are The Blessing."`}
          </p>
          <div className="flex text-2xl gap-3 text-orange-400 ">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsYoutube />
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="my-3 text-2xl font-semibold">Services</h3>
          <ul className="grid grid-cols-2">
            {services.map((service) => (
              <ServiceList key={service.id} service={service} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="my-3 text-2xl font-semibold">Contact</h3>
          <ul className="font-semibold text-orange-400">
            <li className="flex mt-1 items-center gap-3 ">
              <BiSolidPhoneCall />
              <h4>+88 0183330001</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiOutlineMail />
              <h4>smart@event.com</h4>
            </li>
            <li className="flex mt-1 items-center gap-3 ">
              <HiLocationMarker />
              <h4>Dhaka, Bangladesh</h4>
            </li>
          </ul>
        </div>
      </div>
      <div className=" mt-16 text-center">
        <hr className="w-3/4 mx-auto mb-6" />
        <span>Copyright © 2023 - All right reserved</span>
      </div>
    </footer>
    // <Footer
    //   columns={[
    //     {
    //       icon: (
    //         <h2 className="font-bold">
    //           <span className=" text-2xl font-normal text-orange-400">S</span>
    //           mart
    //           <span className=" text-4xl font-normal text-orange-400">E</span>
    //           vent
    //         </h2>
    //       ),
    //     },
    //   ]}
    //   bottom="Copyright © 2023 - All right reserved"
    // />
    // mountNode,
  );
};

export default FooterContainer;
