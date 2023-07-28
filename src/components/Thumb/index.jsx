import React from "react";
import cardsBackground from "../../assets/cards-background.png";

const handleClick = (accommodationTitle) => {
  alert(`Doit ouvrir la page du logement ${accommodationTitle}`);
};

const Thumb = ({ title }) => {
  return (
    <li
      className="gallery-list__card"
      onClick={() => handleClick(title)}
      style={{
        backgroundImage: `url(${cardsBackground})`,
      }}
    >
      <p className="gallery-list__card__title">{title}</p>
    </li>
  );
};

export default Thumb;
