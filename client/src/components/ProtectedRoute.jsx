import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";




const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useContext(UserContext);

    if(!isAuthenticated) return <Navigate to='/user/login' />
    return children;
}


export default ProtectedRoute;