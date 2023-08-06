import "../../styles/style.css";
import Thumb from "../Thumb";

const Gallery = ({ logements }) => {
  if (!logements) {
    return null;
  }
  return (
    <div className="gallery-grid">
      {logements.map((logement, index) => (
        <Thumb
          key={index}
          cover={logement.cover}
          title={logement.title}
          id={logement.id}
        />
      ))}
    </div>
  );
};

export default Gallery;
