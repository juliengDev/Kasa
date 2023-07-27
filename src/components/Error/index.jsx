import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error__code">404</h1>
      <h2 className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error__link">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
};

export default Error;
