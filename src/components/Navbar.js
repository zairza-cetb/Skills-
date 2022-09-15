import React from "react";
import Skills from "../Assets/icons/Skills.svg";
import "../css/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = ({ handleSidebar }) => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <div>
        <img
          className="skillsLogo"
          src={Skills}
          alt="Skills logo"
          onClick={() => nav("/")}
        />
      </div>
      <div className="navlist">
        {location.pathname == "/" ? (
          <ul>
            <li>
              <a href="#domain">Domains</a>
            </li>
            <li>
              <a href="#why">Why skill++</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <button onClick={() => nav("/login")}>Login</button>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
      {location.pathname == "/" ? (
        <div className="menubar-icon">
          <GiHamburgerMenu size={25} onClick={handleSidebar} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
