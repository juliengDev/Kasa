import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Assets
import logo from "./assets/LOGO.png";
import logoHeader from "./assets/LogoHeader.png";

//Components
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";

//Pages
import Home from "./components/pages/home";
import About from "./components/pages/about";

const App = () => {
  const altLogo = "logo KASA";
  const copyrightTxt = "© 2020 Kasa. All rights reserved";

  return (
    <React.StrictMode>
      <Router>
        <Header logo={logoHeader} alt={altLogo} />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />\
        </Routes>
        <Footer logo={logo} alt={altLogo} copyright={copyrightTxt} />
      </Router>
    </React.StrictMode>
  );
};
export default App;
