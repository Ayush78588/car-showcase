import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";




const PublicRoute = ({children}) => {
    const {isAuthenticated} = useContext(UserContext);

    console.log(isAuthenticated);
    

    if(isAuthenticated) return <Navigate to='/' />
    return children;
}


export default PublicRoute;