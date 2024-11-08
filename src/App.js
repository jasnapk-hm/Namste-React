// const heading = React.createElement("h1", {}, "Hello world from react");

import React, { lazy, useEffect, useState, Suspense } from "react";

import ReactDOM from "react-dom";
import "../index.css";

import Header from "./componenets/Header";
import Error from "./componenets/Error";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import RestaurantMenu from "./componenets/RestaurantMenu";


const Cart = lazy(() => import("./componenets/Cart"));
const Body = lazy(() => import("./componenets/Body"));
const RestaurantMenu = lazy(() => import("./componenets/RestaurantMenu"));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import userContext from "./utils/userContext";

const AppLayout = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    //authentication
    //suppose we are sending username and password and if the user existing, then will show username

    const data = { username: "jasna" };
    setUsername(data.username);
  }, []);
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggeduser: username, setUsername }}>
        <div>
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </userContext.Provider>
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

      { path: "/cart", element: <Cart /> },
      { path: "/restaurant/:id", element: <RestaurantMenu /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
