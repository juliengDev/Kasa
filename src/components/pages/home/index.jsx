import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import AccommodationList from "./AccommodationList";

const Home = () => {
  return (
    <React.StrictMode>
      <Header />
      <Banner />
      <AccommodationList />
    </React.StrictMode>
  );
};

export default Home;
