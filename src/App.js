import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Assets
import logoFooter from "./assets/img/LOGO.png";
import logoHeader from "./assets/img/LogoHeader.png";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Pages
import Error from "./pages/error";
import Home from "./pages/home";
import About from "./pages/about";
import Logement from "./pages/logement";


const App = () => {
  const altLogo = "logo KASA";
  const copyrightTxt = "© 2020 Kasa. All rights reserved";

  return (
    <React.StrictMode>
      <Router>
        <Header logo={logoHeader} alt={altLogo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer logo={logoFooter} alt={altLogo} copyright={copyrightTxt} />
      </Router>
    </React.StrictMode>
  );
};
export default App;
