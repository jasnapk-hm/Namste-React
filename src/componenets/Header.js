import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import userContext from "../utils/userContext";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const status = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart", cartItems.length, cartItems);

  const { loggeduser } = useContext(userContext);
  return (
    <div className="flex justify-between sticky  bg-green-100 m-2">
      <div className="logo-container">
        {" "}
        <img className="w-100 h-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-10  m-4 ">
          <li className="px-4">Online:{status ? "💚 " : "💔 "} </li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart"> 🛒({cartItems.length}items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li>user:{loggeduser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
