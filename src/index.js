import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/pages/home/Header";
import Banner from "./components/pages/home/Banner";
import Gallery from "./components/pages/home/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Gallery />
  </React.StrictMode>
);
