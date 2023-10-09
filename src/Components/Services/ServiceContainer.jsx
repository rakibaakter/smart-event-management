import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
// import ServiceList from "./ServiceList";
// import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
// import schedule from "../../assets/schedule.jpg";

const ServiceContainer = () => {
  // const { services } = useLoaderData();
  const { services } = useAuthInfoHooks();

  return (
    <div className="my-32 text-center px-2 md:px-10 lg:px-28">
      <h2 className="text-3xl font-bold text-gray-400 border-b-orange-400 my-10">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
