import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log("line-9 privateRout location =",location);

    
    if(loading){
        return <div className=" text-center"><span className="loading loading-bars loading-lg text-secondary "></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location?.pathname}} replace ></Navigate>;
};

export default PrivateRout;