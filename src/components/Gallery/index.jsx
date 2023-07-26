import React from "react";
import "../../styles/style.css";
import datas from "../../datas/logements.json";
import cardsBackground from "../../assets/cards-background.png";

const handleClick = (accommodationTitle) => {
  alert(`Doit ouvrir la page du logement ${accommodationTitle}`);
};

const Accommodation = ({ title }) => {
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

const Gallery = () => {
  return (
    <ul className="gallery-list">
      {datas.map(({ id, title }) => (
        <Accommodation key={id} title={title} />
      ))}
    </ul>
  );
};

export default Gallery;
