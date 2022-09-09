import React from 'react'
import Skills from "../Assets/icons/Skills.svg"
import "../css/Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = ({handleSidebar}) => {
  return (
    <div className="navbar">
        <div>
            <img src={Skills} alt="Skills logo"/>
        </div>
        <div className="navlist">
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
                    <button>Login</button>
                </li>
            </ul>
        </div>
        <div className="menubar-icon">
            <GiHamburgerMenu size={25} onClick={handleSidebar}/>
        </div>
    </div>
  )
}

export default Navbar