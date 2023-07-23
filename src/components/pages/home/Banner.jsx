import React from "react";
import "../../../styles/style.css";

const Logo = () => {
  return (
    <img
      className="banner__logo"
      src="../../../assets/LOGO.png"
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
