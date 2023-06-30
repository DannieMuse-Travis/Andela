import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/Homepage"

export const MainRoute = createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[{
        path:'/',
        element:<HomePage/>
    }]
}])