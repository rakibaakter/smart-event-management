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
      <h2 className="text-3xl font-bold text-gray-400 border-b-orange-400 mt-10">
        Our Services
      </h2>
      <p className="mb-10 text-2xl text-orange-400">
        We are constantly trying to express ourselves and actualize our dreams.
      </p>

      <div className="grid lg:grid-cols-2  gap-6 flex-1">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
