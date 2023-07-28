import React from "react";
import "../../styles/style.css";

const Banner = ({ backgroundImage, title }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="banner__overlay"></div>
      {title && <p className="banner__title">{title}</p>}
    </div>
  );
};

export default Banner;
