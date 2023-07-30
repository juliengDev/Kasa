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
  equipments,
}) => {
  return (
    <div className="description">
      <div className="description__title">
        <h1>{title}</h1>
        <p>{location}</p>
        {tags &&
          tags.map(({ tag }) => <div className="description__tag">{tag}</div>)}
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
