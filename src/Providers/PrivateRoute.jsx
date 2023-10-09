import { Navigate } from "react-router-dom";
import useAuthInfoHooks from "../Hooks/useAuthInfoHooks";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthInfoHooks();

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
