import {Outlet} from "react-router-dom";

// components
import Topbar from "../topbar/Topbar";
import Navbar from "../navbar/Navbar";


function Layout() {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;