import { createBrowserRouter } from "react-router-dom"
import Layout from "../Weblium/Layout"
import Homescreen from "../pages/Homescreen"




export const mainRouter = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
   children:[
    {
       index: true,
       element: <Homescreen/>
    }
   ]
}

])