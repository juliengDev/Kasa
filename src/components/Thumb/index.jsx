import { Link } from "react-router-dom";

const Thumb = ({ title, id, cover }) => {
  return (
    <Link to={`/${id}`}>
      <div className="gallery-grid-container">
        <img className="gallery-grid-container__img" src={cover} alt={title} />
        <div className="gallery-grid-container__img-layer"></div>
        <p className="gallery-grid-container__title">{title}</p>
      </div>
    </Link>
  );
};

export default Thumb;
