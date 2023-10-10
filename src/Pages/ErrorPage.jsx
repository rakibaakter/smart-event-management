import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="font-semibold text-2xl text-center" id="error-page">
      <div className="max-h-[50vh] flex justify-center mt-6">
        <img className="w-1/3" src={errorImg} alt="" />
      </div>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="my-4 btn bg-orange-400 text-white hover:text-gray-600"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
