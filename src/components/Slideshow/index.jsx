import React from "react";
import "../../styles/style.css";
// import { useState } from "react";
// import data from "../../datas/logements.json";

const Slideshow = () => {
  return <div className="slideshow">Slideshow</div>;
};

export default Slideshow;

/* const Slideshow = ({ pictures }) => {
   const [currentSlide, setCurrentSlide] = useState(pictures[0]);
   const renderSlides = data.map(({ title, pictures }) =>
    pictures.map((picture, index) => (
      <div key={index}>         <img src={picture} alt={title + "_" + index} />
        <p className="legend">{title}</p>
      </div>     )),   );

   const LeftArrow = () => {
     return (
       <div className="backArrow">
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
       </div>
     );
   };

   const RightArrow = () => {
     return (
       <div className="forwardArrow">
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
       </div>
     );
   }
   return <div>Super</div>;
 }; */
