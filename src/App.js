// const heading = React.createElement("h1", {}, "Hello world from react");

import React, { lazy } from "react";

import ReactDOM from "react-dom";
import "../index.css";

import Header from "./componenets/Header";
import Error from "./componenets/Error";
// import Body from "./componenets/Body";

import About from "./componenets/About";
import Contact from "./componenets/Contact";
import RestaurantMenu from "./componenets/RestaurantMenu";

const Body = lazy(() => import("./componenets/Body"));
const RestaurantMenu = lazy(() => import("./componenets/RestaurantMenu"));
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const AppLayout = () => {
  return (
   
      <Provider store={appStore}>
         <div>
        <Header />
        <Outlet />
     
    </div>
     </Provider>
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
