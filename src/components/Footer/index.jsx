import React from "react";
import "../../styles/style.css";

const Footer = ({ logo, alt, copyright }) => {
  return (
    <footer>
      <div className="footer">
        <img className="footer__logo" src={logo} alt={alt}></img>
        <p className="footer__copyright">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
