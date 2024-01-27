import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Homepage from "../pages/homepage";
import Team from "../pages/our-team";
import News from "../pages/news";
import NewsDetails from "../pages/details";

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
                path: "/news",
                element: <News />
            },
            {
                path: "/news/:id",
                element: <NewsDetails />
            },
            {
                path: "/team",
                element: <Team />
            }
        ]
    }
])