import { Navigate, Outlet } from "react-router-dom";
import { isTokenExpired } from "../core/utility/services/authUtility";

const ProtectedRoute = () => {
  return isTokenExpired() ? <Navigate to="/login" replace /> : <Outlet />;
};

export default ProtectedRoute;
