import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "products",
    element: <ProductsPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
