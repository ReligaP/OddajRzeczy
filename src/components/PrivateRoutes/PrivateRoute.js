import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ children , redirectPath = '/',}) => {
    const user = useSelector((state) => state.auth.value);

    return user ? children : <Navigate to={redirectPath} />;
}

export default PrivateRoute;