import React from "react";
import "../../styles/style.css";

//Components
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

//Assets
import homeBanner from "../../assets/img/home.jpg";

const Home = ({ datas }) => {
  const title = "Chez vous,partout et ailleurs";

  return (
    <main className="main">
      <Banner backgroundImage={homeBanner} title={title} />
      <Gallery datas={datas} />
    </main>
  );
};

export default Home;
