import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Layout/Home";
import Shop from "./Components/Shop/Shop";
import Order from "./Components/Order/Order";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import cartsProductsLoader from "./Loaders/cartProductsLoader";
import CheckOut from "./Components/Checkout/CheckOut";
import SignUp from "./Components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "order",
        element: <Order></Order>,
        loader: cartsProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: <CheckOut></CheckOut>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
