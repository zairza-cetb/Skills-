import React from "react";
import './Footer.scss'
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../../Assets/images/logo.png";

const Footer = () => {
  return (
      <div className="Footer">
      <div className="Footer-left">
        <img src={Logo} alt="" />
        <div className="Footer-left-text">
          <p>
          A Event organised by Zairza for the welfare of budding talented software 
          </p>
          <span className="Footer-left-text-span">engineers,hardware engineers and designers</span>
        </div>
      </div>
      <div className="Footer-right">
        <a className="Footer-right_socials" href="https://www.instagram.com/zairza.outr/">
            <FaInstagram className="icon" />
        </a>
        <a className="Footer-right_socials" href="https://twitter.com/zairza_cetb?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <FaTwitter className="icon" />
        </a>
        <a className="Footer-right_socials" href="https://www.youtube.com/channel/UC85D6dB1LezN5n9vcU03dkQ">
            <FaYoutube className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;