import { useState, useEffect } from "react";
import "../../styles/style.css";

//Components
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";

//Assets
import homeBanner from "../../assets/img/home.jpg";

const Home = () => {
  const title = "Chez vous,partout et ailleurs";
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setLogements(res))
      .catch((err) => console.log("Erreur : ", err));
  }, []);

  if (!logements) {
    return null;
  }

  return (
    <main className="main">
      {logements && (
        <>
          <section className="banner">
            <Banner backgroundImage={homeBanner} title={title} />
          </section>
          <section className="gallery">
            <Gallery logements={logements} />
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
