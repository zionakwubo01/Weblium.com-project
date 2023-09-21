
import { Outlet } from "react-router-dom";
import Header from "../Static/WebliumHeader"

import Footer from "../Static/WebliumFooter"


const Layout = ()=>{


return(

    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
);

}

export default Layout