import React, { useState } from "react";

import "../../styles/style.css";

const Dropdown = ({ label, content, buttonClass, contentClass, type }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  console.log(content);
  return (
    <div className="menu">
      <button onClick={handleOpen} className={buttonClass}>
        <p className="dropdown__button__label">{label}</p>
        <svg
          className="dropdown__button__ico"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
            fill="white"
          />
        </svg>
      </button>
      {/* {open && <p className={contentClass}>{content}</p>} */}

      {open && type === "logement" ? (
        <ul>
          {content.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      ) : (
        open && <p className={contentClass}>{content}</p>
      )}
    </div>
  );
};

export default Dropdown;
