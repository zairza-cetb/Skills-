import React from "react";
import "./Navbar.scss";
import Logo from "../Assests/Frame41.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="whole-nav">
      <img src={Logo} alt="" />
      <nav class="navbar">
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div class="menu">
           <Button />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
