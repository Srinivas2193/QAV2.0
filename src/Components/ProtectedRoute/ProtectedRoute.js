import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to={`/login`} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
