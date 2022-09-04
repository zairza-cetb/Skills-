import React from "react";
import "./Navbar.scss";
import Logo from "../Assests/Frame41.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="whole-nav">
      <img src={Logo} alt="" />
      <nav className="navbar">
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
          <div className="menu">
            <li>Domains</li>
            <li>why skill++</li>
            <li>Contact us</li>
           <Button />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
