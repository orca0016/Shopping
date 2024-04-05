import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Faq from "../pages/Faq";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import CheckOut from "../pages/CheckOut";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";

export const MainRoot = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3 className="text-center"> چیزی پیدا نکردیم 😪...</h3>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
        {
          path: "/blogs/:blogId",
          element: <Blog />,
        },
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
    errorElement: <h3 className="text-center"> چیزی پیدا نکردیم 😪...</h3>,
  },
]);
