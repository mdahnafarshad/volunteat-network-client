import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import NavRegis from "../../shared/NavRegis";

const RegLayOut = () => {
    return (
        <div>
            <NavRegis></NavRegis>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RegLayOut;