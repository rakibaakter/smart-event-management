import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ServiceDetail = () => {
  const { id } = useParams();
  console.log(id);
  //   const { selectedService, setSelectedService } = useState({});
  const { services } = useLoaderData();
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

  const { service_name, events_managed, image_url, price, description } =
    selectedService;

  return (
    <div className="px-2 md:px-10 lg:px-28 my-20">
      <div className="flex justify-between items-center">
        <div className="space-y-6 w-1/2">
          <h2 className=" text-3xl font-bold ">{service_name}</h2>
          <h3 className="font-semibold text-gray-400 text-4xl">
            Managed Event - {events_managed}
          </h3>
          <p className="font-bold text-orange-400">Price : {price}</p>
          <p className="w-4/5">{description}</p>
          <button className="w-1/2 btn bg-orange-400 text-white hover:text-gray-600">
            Booking Now
          </button>
        </div>
        <div className="w-1/2">
          <img src={image_url} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
