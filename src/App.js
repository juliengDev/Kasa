import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Error from "./components/Error";

//Pages
import Home from "./components/pages/home";
import About from "./components/pages/about";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />\
        </Routes>
      </Router>
    </React.StrictMode>
  );
};
export default App;
