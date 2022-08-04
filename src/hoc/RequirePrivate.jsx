import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequirePrivate = ({ children }) => {
  let isAuth = false;

  const usersFromStore = useSelector((state) => state.user);

  const currentUser = Object.values(usersFromStore).filter(
    (obj) => obj.isAuth === true
  )[0];

  if (currentUser) {
    isAuth = currentUser.isAuth;
  }

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export { RequirePrivate };
