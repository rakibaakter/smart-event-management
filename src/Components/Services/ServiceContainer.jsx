import { useLoaderData } from "react-router-dom";
import Service from "./Service";
// import ServiceList from "./ServiceList";
// import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
// import schedule from "../../assets/schedule.jpg";

const ServiceContainer = () => {
  const { services } = useLoaderData();

  return (
    <div className="my-32 text-center px-2 md:px-10 lg:px-28">
      <h2 className="text-3xl font-bold text-gray-400 border-b-orange-400 my-10">
        Our Services
      </h2>
      {/* <div className="text-center">
      <h3 className="my-6 text-2xl font-semibold">We Are Working For</h3>
      {services.map((service) => (
        <ServiceList key={service.id} service={service} />
      ))}
      <button className=" my-6 btn border-orange-400  hover:text-gray-600">
        Hire Us
      </button>
    </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
