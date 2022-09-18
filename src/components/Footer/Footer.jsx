import React from "react";
import './Footer.scss'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../Assests/Frame41.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer">
      <div className="Footer-left">
        <img src={Logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
      <div className="Footer-right">
        <a className="Footer-right_socials" href="https://www.instagram.com/">
            <FaInstagram className="icon" />
        </a>
        <a className="Footer-right_socials" href="https://www.twitter.com/">
            <FaTwitter className="icon" />
        </a>
        <a className="Footer-right_socials" href="https://www.youtube.com/">
            <FaYoutube className="icon" />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Footer;