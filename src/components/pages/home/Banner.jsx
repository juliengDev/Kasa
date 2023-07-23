import React from "react";
import "../../../styles/style.css";
import logo from "../../../assets/LOGO.png";

const Logo = () => {
  return (
    <img
      className="banner__logo"
      src={logo}
      alt="Logo KASA"
      aria-label="Logo du site Kasa"
    />
  );
};

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav__link nav__link--active">Accueil</li>
        <li className="nav__link">A Propos</li>
      </ul>
    </nav>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <Logo />
      <Nav />
    </div>
  );
};

export default Banner;
