import React from "react";
import "../../styles/style.css";

//Components
import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";

//Assets
import AboutBanner from "../../assets/img/about.jpg";
import dropdownContent from "../../assets/data/about.json";

const About = () => {
  return (
    <main className="main">
      <Banner backgroundImage={AboutBanner} />
      <div className="dropdown">
        {dropdownContent.map(({ label, text, index }) => (
          <Dropdown
            key={`${label}-${index}`}
            label={label}
            content={text}
            buttonClass={"dropdown__button"}
            contentClass={"dropdown__content hidden"}
          />
        ))}
      </div>
    </main>
  );
};

export default About;
