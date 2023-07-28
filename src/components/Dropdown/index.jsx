import React from "react";
import "../../styles/style.css";


const Dropdown = ({ label, content }) => {
  return (
    <div className="dropdown">
      <button className="dropdown__button">
        <p className="dropdown__button__label">{label}</p>
        <i className="dropdown__button__ico"></i>
        <p className=" dropdown__content hidden">{content}</p>
      </button>
    </div>
  );
};

export default Dropdown;
