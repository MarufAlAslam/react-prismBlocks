import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Homepage from "../pages/homepage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Homepage />
            }
        ]
    }
])