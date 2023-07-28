import React from "react";
import "../../styles/style.css";
import home from "../../assets/home.jpg";

const Banner = () => {
  const promise = "Chez vous,partout et ailleurs";
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      <div className="banner__overlay"></div>
      <p className="banner__title">{promise}</p>
    </div>
  );
};

export default Banner;
