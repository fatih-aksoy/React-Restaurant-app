import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p>&copy; 2024 FireBurger.com</p>
        <div className="icons">
          <FaInstagram />
          <FaXTwitter />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
