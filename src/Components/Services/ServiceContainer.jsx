import Service from "./Service";
import ServiceList from "./ServiceList";
import useAuthInfoHooks from "../../Hooks/useAuthInfoHooks";
// import schedule from "../../assets/schedule.jpg";

const ServiceContainer = () => {
  //   const services = useLoaderData().services;
  //   setServices = data.services;

  const { services } = useAuthInfoHooks();
  //   console.log(services);

  return (
    <div className=" text-center my-6 px-2 md:px-10 lg:px-28">
      <h2 className="text-3xl font-bold text-gray-400 border-b-orange-400 my-10">
        Our Services
      </h2>
      <div className="flex flex-col lg:flex-row gap-3 mt-10">
        <div className="lg:w-1/3 text-left">
          <h3 className="my-6 text-2xl font-semibold ">We Are Working For</h3>
          <ul className="list-item">
            {services.map((service) => (
              <ServiceList key={service.id} service={service} />
            ))}
          </ul>
          <button className="w-full md:w-1/3 lg:w-4/5 my-6 btn border-orange-400  hover:text-gray-600">
            Hire Us
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
