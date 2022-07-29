import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequirePrivate = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export { RequirePrivate };
