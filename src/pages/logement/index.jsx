import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components

import Slideshow from "../../components/Slideshow";
import DetailsLogememt from "../../components/DetailsLogememt";
import Dropdown from "../../components/Dropdown";

const Logement = () => {
  const [logement, setLogement] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const naviguate = useNavigate();

  useEffect(() => {
    async function fetchLogement() {
      setLoading(true);
      try {
        const response = await fetch("logements.json");
        const logementData = await response.json();
        const logement = logementData.find((item) => item.id === id);
        setLogement(logement);
        if (!logement) {
          naviguate("*");
        }
      } catch (err) {
        console.log("Error :" + err);
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchLogement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <main className="main">
      {logement && (
        <>
          <section className="slideshow">
            <Slideshow pictures={logement.pictures} />
          </section>
          <section className="description">
            <DetailsLogememt
              key={logement.id}
              title={logement.title}
              description={logement.description}
              location={logement.location}
              tags={logement.tags}
              hostName={logement.host.name}
              hostPicture={logement.host.picture}
              ratings={logement.rating}
              equipments={logement.equipments}
            />
          </section>
          <section className="dropdown-logement">
            <Dropdown
              label={"Description"}
              content={logement.description}
              buttonClass={"dropdown__button dropdown-logement__button"}
              contentClass={
                "dropdown-logement__content__description dropdown-logement__content hidden"
              }
            />
            <Dropdown
              type={"logement"}
              label={"Équipements"}
              content={logement.equipments}
              buttonClass={"dropdown__button dropdown-logement__button"}
              contentClass={"dropdown-logement__content hidden"}
            />
          </section>
        </>
      )}
    </main>
  );
};

export default Logement;
