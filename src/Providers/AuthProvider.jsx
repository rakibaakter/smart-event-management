import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [historyInfo, setHistoryInfo] = useState([]);

  // load about json data
  useEffect(() => {
    fetch("/history.json")
      .then((res) => res.json())
      .then((data) => setHistoryInfo(data));
  }, []);

  const authInfo = { historyInfo };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
