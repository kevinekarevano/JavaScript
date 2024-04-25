import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import HomePages from "../pages";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/", // path
    element: <RootLayout />, 
    children: [
      {
        path: "/", 
        element: <HomePages />, 
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
