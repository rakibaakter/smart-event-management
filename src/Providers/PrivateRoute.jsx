import { Navigate, useLocation } from "react-router-dom";
import useAuthInfoHooks from "../Hooks/useAuthInfoHooks";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthInfoHooks();
  const location = useLocation();

  console.log(location);

  if (loading) {
    return (
      <div className="w-1/2 mx-auto text-center py-10">
        <span className="loading loading-spinner loading-lg text-orange-400"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};

export default PrivateRoute;
