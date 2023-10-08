import {Navigate, useLocation} from "react-router-dom";
import {uesAuthContext} from "../context/AuthContext";
import Spinner from "../components/spinner";

const PrivateRoute = ({children}) => {
  const {user, loading} = uesAuthContext();
  const location = useLocation();

  if (loading) return <Spinner />;

  if (user) return children;

  return <Navigate to="/signin" state={{from: location}} replace />;
};

export default PrivateRoute;
