/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentImage = pictures[currentIndex];

  return (
    <div className="slideshow-container">
      {pictures.length > 1 && (
        <>
          <button
            className="slideshow-container__button-left"
            onClick={previousImage}
          >
            <svg
              width="96"
              height="120"
              viewBox="0 0 96 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
                fill="white"
              />
            </svg>
          </button>
          <span className="slideshow-container__count">
            {currentIndex + 1} / {pictures.length}
          </span>
          <button
            className="slideshow-container__button-right"
            onClick={nextImage}
          >
            <svg
              width="96"
              height="121"
              viewBox="0 0 96 121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
                fill="white"
              />
            </svg>
          </button>
        </>
      )}

      <div className="image-container">
        <img
          src={currentImage}
          alt={`Image ${currentIndex + 1}`}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Slideshow;
