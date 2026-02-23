import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const isAuth = localStorage.getItem("isAuth");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}