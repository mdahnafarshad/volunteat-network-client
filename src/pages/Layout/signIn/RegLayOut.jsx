import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import NavBar from "../../shared/NavBar";

const RegLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RegLayOut;