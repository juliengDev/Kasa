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
      aria-roledescription="img"
    />
  );
};

const Nav = () => {
  return (
    <nav
      className="nav"
      aria-label="naviguation principale"
      aria-roledescription="navigation"
    >
      <ul>
        <li className="nav__link nav__link--active" aria-labelledby="Accueil">
          Accueil
        </li>
        <li className="nav__link" aria-labelledby="A Propos">
          A Propos
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <div>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
