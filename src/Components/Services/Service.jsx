import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = ({ service }) => {
  const { service_name, events_managed, image_url, price, id, description } =
    service;

  AOS.init();

  return (
    <div
      data-aos="fade-up"
      className=" flex flex-col md:flex-row text-left bg-slate-200 shadow-xl gap-3"
    >
      <figure className="md:w-2/3">
        <img className="w-full h-full" src={image_url} alt="" />
      </figure>
      <div className="p-3">
        <h2 className="text-xl">
          {service_name}
          {/* <div className="badge bg-orange-400">{events_managed}</div> */}
        </h2>
        <h4 className="text-gray-400 font-bold">Price : {price}</h4>
        <p className="w-11/12">
          {description.length > 105 ? description.slice(0, 105) : description}
        </p>
        <div className="card-actions ">
          <Link to={`/services/${id}`}>
            <button className="btn bg-orange-400 text-white hover:text-gray-600">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
