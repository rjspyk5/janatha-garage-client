import React, { useContext } from "react";
import { AuthContext } from "../assets/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return "loading.............................";
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};
