import "../../styles/style.css";
import Thumb from "../Thumb";

const Gallery = ({ logements }) => {
  if (!logements) {
    return null;
  }
  return (
    <ul className="gallery-list">
      {logements.map((logement, index) => (
        <Thumb
          key={index}
          cover={logement.cover}
          title={logement.title}
          id={logement.id}
        />
      ))}
    </ul>
  );
};

export default Gallery;
