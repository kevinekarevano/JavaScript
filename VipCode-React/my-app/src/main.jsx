import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/products.jsx";
import ProfilePage from "./Pages/profile.jsx";
import DetailProductPage from "./Pages/detailProduct.jsx";

// routing
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-5xl font-bold">Home</h1>
      </div>
    ),

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
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
