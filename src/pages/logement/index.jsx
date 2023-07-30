import React from "react";

// Components

import Slideshow from "../../components/Slideshow";
import DetailsLogememt from "../../components/DetailsLogememt";

const Logement = ({
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
    <main className="main">
      <Slideshow />
      <DetailsLogememt
        title={title}
        description={description}
        location={location}
        tags={tags}
        hostName={hostName}
        hostPicture={hostPicture}
        rating={rating}
        equipments={equipments}
      />
    </main>
  );
};

export default Logement;
