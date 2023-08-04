import { Link } from "react-router-dom";

const Thumb = ({ title, id, cover }) => {
  return (
    <Link to={`/${id}`}>
      <li className="gallery-list__card">
        <img src={cover} alt={title} />
        <p className="gallery-list__card__title">{title}</p>
      </li>
    </Link>
  );
};

export default Thumb;
