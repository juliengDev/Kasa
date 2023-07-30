import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

const Error = () => {
  return (
    <main>
      <div className="error">
        <h1 className="error__code">404</h1>
        <h2 className="error__txt">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <Link to="/" className="error__link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
};

export default Error;
