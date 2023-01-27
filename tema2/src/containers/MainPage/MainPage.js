import "./style.scss";
import React from "react";
import Cocktail from "./components/Cocktail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Header/>
      <Cocktail />
      <Cocktail />
      <Cocktail />
      <Cocktail />
      <Cocktail />
      <Cocktail />
      <Cocktail />
      <Footer/>
    </div>
  );
};

export default MainPage;
