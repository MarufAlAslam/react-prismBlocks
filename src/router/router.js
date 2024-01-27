import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Homepage from "../pages/homepage";
import AboutUs from "../pages/about-us";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/about",
                element: <AboutUs />
            }
        ]
    }
])