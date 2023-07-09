import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer";
import NavBar from "../../shared/NavBar";


const Main = () => {


    return (
        <>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default Main;