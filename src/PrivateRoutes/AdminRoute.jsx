import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/userAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoader] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoader) {
    return (
      <div>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate to="/" state={{ from: location }} replace>
      {" "}
    </Navigate>
  );
};

export default AdminRoute;
