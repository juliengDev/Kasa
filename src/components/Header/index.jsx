import "../../styles/style.css";

import { Link } from "react-router-dom";

const Header = ({ logo, alt }) => {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt={alt}
        aria-label="Logo du site Kasa"
        aria-roledescription="img"
      />

      <nav
        className="nav"
        aria-label="naviguation principale"
        aria-roledescription="navigation"
      >
        <ul>
          <li>
            <Link className="nav__link" aria-labelledby="Accueil" to="/">
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
    </header>
  );
};

export default Header;
