import React from "react";
import "../../styles/style.css";

//Components
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

//Assets
import homeBanner from "../../assets/img/home.jpg";
import datas from "../../assets/data/logements.json";

const Home = () => {
  const title = "Chez vous,partout et ailleurs";

  return (
    <main className="main">
      <Banner backgroundImage={homeBanner} title={title} />
      <Gallery datas={datas} />
    </main>
  );
};

export default Home;
