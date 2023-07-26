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
      <p className="banner__title">{promise}</p>
    </div>
  );
};

export default Banner;
