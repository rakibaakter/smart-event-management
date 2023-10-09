import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [historyInfo, setHistoryInfo] = useState([]);
  const [services, setServices] = useState([]);
  const [reviews, setReview] = useState([]);
  const [user, setUser] = useState(null);

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

  const createUserByEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInByGoogle = () => {
    const googleProvider = new GoogleAuthProvider();

    return signInWithPopup(auth, googleProvider);
  };

  const logInbyEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // set user in auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    historyInfo,
    services,
    reviews,
    user,
    createUserByEmail,
    signInByGoogle,
    logInbyEmail,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
