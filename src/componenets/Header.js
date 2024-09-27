import { useState } from "react";
import { LOGO_URL } from "../utils/common";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        {" "}
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Address</li>
          <li>Contact Us</li>
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
