import React from "react";
import "../../../styles/style.css";
import datas from "../../../datas/logements.json";
import cardsBackground from "../../../assets/cards-background.png";

console.log(datas);

const TitleList = () => {
  return (
    <ul className="gallery__list">
      {datas.map((data) => (
        <li
          style={{
            backgroundImage: `url(${cardsBackground})`,
          }}
          className="gallery__list__card"
          key={data.id}
        >
          <p className="gallery__list__card__title">{data.title}</p>
        </li>
      ))}
    </ul>
  );
};

const Gallery = () => {
  return (
    <div className="gallery">
      <TitleList />
    </div>
  );
};

export default Gallery;
