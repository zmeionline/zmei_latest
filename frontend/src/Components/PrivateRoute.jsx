import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return localStorage.getItem("adminToken") ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" />
  );
};

export default PrivateRoute;
