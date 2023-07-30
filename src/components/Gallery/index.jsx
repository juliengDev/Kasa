import React from "react";
import "../../styles/style.css";
import Thumb from "../Thumb";

const Gallery = ({ datas }) => {
  return (
    <ul className="gallery-list">
      {datas.map(({ id, title, cover }) => (
        <Thumb key={id} cover={cover} title={title} />
      ))}
    </ul>
  );
};

export default Gallery;
