import "./style.scss";
import React from "react";
import Cocktail from "./components/Cocktail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="header">
        <Header />
      </div>

      <div className="main">
        <Cocktail />
        <Cocktail />
        <Cocktail />
        <Cocktail />
        <Cocktail />
        <Cocktail />
        <Cocktail />   
      </div>
      <div className="footer">
        <Footer />
      </div>

    </div>
  );
};

export default MainPage;
