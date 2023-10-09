import { FaCheck } from "react-icons/fa6";

const ServiceList = ({ service }) => {
  const { service_name } = service;
  return (
    <li className="flex mt-1 items-center text-gray-400  gap-3">
      <FaCheck className="font-semibold text-orange-400" />
      <h4>{service_name}</h4>
    </li>
  );
};

export default ServiceList;
