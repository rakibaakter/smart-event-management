import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { service_name, events_managed, image_url, price, id, description } =
    service;
  return (
    <div className="card bg-base-100 shadow-xl text-left">
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">
          {service_name}
          {/* <div className="badge bg-orange-400">{events_managed}</div> */}
        </h2>
        <h4 className="text-gray-400 font-bold">Price : {price}</h4>
        <p>
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
