import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const status= useOnlineStatus();


  return (
    <div className="flex justify-between  bg-pink-200 m-2">
      <div className="logo-container">
        {" "}
        <img className="w-100 h-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-10  m-4 ">
          <li className="px-4">Online:{status ? "💚 ": "💔 "}   </li>
          <li className="px-4">  <Link to="/">Home</Link></li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
