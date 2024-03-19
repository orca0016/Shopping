import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MainRoot } from "./layouts/MainRoot.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={MainRoot} />
    </MainLayout>
  </React.StrictMode>
);
