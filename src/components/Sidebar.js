import React from "react";
import "../css/Sidebar.css";
import Skills from "../Assets/icons/Skills.svg";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ handleSidebar }) => {
  const nav = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div>
          <img src={Skills} alt="Skills logo" />
        </div>
        <div className="sidebar-icon">
          <IoCloseSharp size={30} onClick={handleSidebar} />
        </div>
      </div>
      <ul className="sidebar-list">
        <li>
          <a href="#domain" onClick={handleSidebar}>
            Domains
          </a>
        </li>
        <li>
          <a href="#why" onClick={handleSidebar}>
            Why skill++
          </a>
        </li>
        <li>
          <a href="" onClick={handleSidebar}>
            Contact us
          </a>
        </li>
        <li>
          <button  onClick={() => {
            handleSidebar();
            nav("/login")
          }
          }>Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
