import React from "react";
import "../../styles/style.css";
import logo from "../../assets/LOGO.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <img
      className="header__logo"
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
        <li>
          <Link
            className="nav__link"
            aria-labelledby="Accueil"
            to="/"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link className="nav__link" aria-labelledby="A Propos" to="/about">
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
