// const heading = React.createElement("h1", {}, "Hello world from react");

import React from "react";

import ReactDOM from "react-dom";
import "../index.css";

import Header from "./componenets/Header";

import Body from "./componenets/Body";





const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
