import React from "react";
import Tags from "../Tags";
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
        <div className="description__tags">
          {tags &&
            tags.map((tag, index) => <Tags key={index} tagTitle={tag} />)}
        </div>
      </div>
      <div className="description__host">
        <div className="description__host__name">
          <p>{hostName}</p>
        </div>
        <img src={hostPicture} alt="Profil de l'hebergeur" />
        {/* Mettre ici le composant Ratings */}
      </div>
    </div>
  );
};

export default DetailsLogememt;
