import React from "react";
import "../../styles/style.css";

const DetailsLogememt = ({
  title,
  description,
  location,
  tags,
  hostName,
  hostPicture,
  rating,
}) => {
  return (
    <div className="description">
      <div className="description__title">
        <h1>{title}</h1>
        <p>{location}</p>
        {/* Mettre ici le composant Tags */}
      </div>
      <div className="description__host">
        <p className="description__host__name">{hostName}</p>
        <img src={hostPicture} alt="Profil de l'hebergeur" />
        {/* Mettre ici le composant Ratings */}
      </div>
      <div>
        {/* Mettre ici le composant Dropdown avec le titre Description */}
        {/* Mettre ici le composant Dropdown avec le titre Equipements */}
      </div>
    </div>
  );
};

export default DetailsLogememt;
