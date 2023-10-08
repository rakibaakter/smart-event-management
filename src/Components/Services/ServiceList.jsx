import { FaCheck } from "react-icons/fa6";

const ServiceList = ({ service }) => {
  const { service_name } = service;
  return (
    <li className="flex mt-3 items-center text-xl font-semibold text-orange-400 gap-3">
      <FaCheck />
      <h4>{service_name}</h4>
    </li>
  );
};

export default ServiceList;
