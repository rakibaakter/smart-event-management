import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuthInfoHooks from "../Hooks/useAuthInfoHooks";

const ServiceDetail = () => {
  const { id } = useParams();
  console.log(id);
  //   const { selectedService, setSelectedService } = useState({});
  const { services } = useAuthInfoHooks();
  console.log(services);

  const selectedService = services?.find((service) => service?.id == id);

  //   useEffect(() => {
  //     console.log(10);
  //   }, []);

  //   useEffect(() => {
  //     console.log(11);
  //     const selectedItem = services?.find((service) => service?.id == id);
  //     console.log(selectedItem);
  //     setSelectedService(selectedItem);
  //   }, [id, services, setSelectedService])

  const {
    service_name,
    events_managed,
    image_url,
    price,
    description,
    team_members,
    host_name,
  } = selectedService;

  return (
    <div className="px-4 md:px-10 lg:px-28 my-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="space-y-6 lg:w-1/2">
          <h2 className="text-xl md:text-2xl font-bold mt-2 ">
            {service_name}
          </h2>
          <h3 className="font-semibold text-gray-400 md:text-3xl">
            Managed Event - {events_managed}
          </h3>
          <p className="font-bold text-orange-400">Price : {price}</p>
          <p>Team Member : {team_members}</p>
          <p>
            Event Hosted by
            <span className="font-bold text-orange-400 text-xl">
              {" "}
              {host_name}
            </span>
          </p>
          <p className=" lg:w-4/5">{description}</p>
          <button className="w-1/2 btn bg-orange-400 text-white hover:text-gray-600">
            Booking Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img src={image_url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
