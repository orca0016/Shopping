import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

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
      //   {
      //     path: "/blogs/:blogId",
      //     element: <SingleBlogPage />,
      //   },
    ],
  },
  {
    path: "/pages",
    element: <p>this is a new page </p>,
    errorElement: <h3 className="text-center"> چیزی پیدا نکردیم 😪...</h3>,
  },
]);
