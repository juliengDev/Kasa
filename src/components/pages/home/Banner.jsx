import React from "react";
import "../../../styles/style.css";
import home from "../../../assets/home.jpg";

const Banner = () => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <p className="banner__title">Chez vous,partout et ailleurs</p>
    </div>
  );
};

export default Banner;
