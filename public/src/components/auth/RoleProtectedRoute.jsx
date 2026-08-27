import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const RoleProtectedRoute = ({ allowedRoles = [] }) => {
  const { isAuthenticated, currentUser } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(currentUser?.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
