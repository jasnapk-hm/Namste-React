// const heading = React.createElement("h1", {}, "Hello world from react");

import React from "react";

import ReactDOM from "react-dom";
import "../index.css";

import Header from "./componenets/Header";
import Error from "./componenets/Error";
import Body from "./componenets/Body";

import About from "./componenets/About";
import Contact from "./componenets/Contact";
import RestaurantMenu from "./componenets/RestaurantMenu";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
