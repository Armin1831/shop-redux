import {Outlet} from "react-router-dom";

// components
import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


function Layout() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;