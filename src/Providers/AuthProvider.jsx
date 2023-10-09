import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [historyInfo, setHistoryInfo] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    // load history  data
    fetch("/history.json")
      .then((res) => res.json())
      .then((data) => setHistoryInfo(data));

    // load services  data
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data.services));

    // load review  data
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReview(data.testimonials));
  }, []);

  const authInfo = { historyInfo, services, reviews };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
