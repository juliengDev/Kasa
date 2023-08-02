import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components
import Slideshow from "../../components/Slideshow";
import DetailsLogememt from "../../components/DetailsLogememt";

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
  }, [id, naviguate, error]);

  if (isLoading) {
    return null;
  }

  return (
    <main className="main">
      {logement && (
        <div>
          <Slideshow />
          <DetailsLogememt
            key={logement.id}
            title={logement.title}
            description={logement.description}
            location={logement.location}
            tags={logement.tags}
            hostName={logement.host.name}
            hostPicture={logement.host.picture}
            rating={logement.rating}
            equipments={logement.equipments}
          />
        </div>
      )}
    </main>
  );
};

export default Logement;
