import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRout = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log("line-9 privateRout location =",location);

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location?.pathname}} replace ></Navigate>;
};

export default PrivateRout;