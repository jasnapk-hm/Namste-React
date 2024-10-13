import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const status= useOnlineStatus();


  return (
    <div className="flex justify-between">
      <div className="logo-container">
        {" "}
        <img className="w-100 h-40" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li>Online:{status ? "💚 ": "💔 "}   </li>
          <li>  <Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
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
