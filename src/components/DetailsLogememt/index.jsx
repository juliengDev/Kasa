import React from "react";
import Tags from "../Tags";
import Rating from "../Rating";

import "../../styles/style.css";

const DetailsLogememt = ({
  id,
  title,
  description,
  location,
  tags,
  hostName,
  hostPicture,
  ratings,
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
        <div className="description__host__profil">
          <p className="description__host__profil__name">{hostName}</p>
          <img
            className="description__host__profil__img"
            src={hostPicture}
            alt="Profil de l'hebergeur"
          />
        </div>
        <div className="description__ratings">
          {<Rating scaleValue={ratings} />}
        </div>
      </div>
    </div>
  );
};

export default DetailsLogememt;
