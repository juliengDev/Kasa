import "../../styles/style.css";

const Banner = ({ backgroundImage, title }) => {
  return (
    <>
      <img src={`${backgroundImage}`} alt="Banniere" />
      <div className="banner__overlay"></div>
      {title && <div className="banner__title">{title}</div>}
    </>
  );
};

export default Banner;
