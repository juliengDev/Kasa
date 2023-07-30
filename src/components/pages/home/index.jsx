import React from "react";


//Components
import Banner from "../../Banner";
import Gallery from "../../Gallery";

//Assets
import homeBanner from "../../../assets/home.jpg";

const Home = () => {
  const title = "Chez vous,partout et ailleurs";

  return (
    <main className="main">
      <Banner backgroundImage={homeBanner} title={title} />
      <Gallery />
    </main>
  );
};

export default Home;
