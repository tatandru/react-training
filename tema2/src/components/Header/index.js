import "./style.scss";
import React from "react";

const Header = () => {
  return (
    <div className='header'>

      <div className="headerBanner">
        <h1 className="title">Cocktails</h1>
      </div>

      <div className="cocktailMenu">
        <span>Alcoholic</span>
        <span>Non Alcoholic</span>
        <span>Ordinary Drink</span>
        <span>Cocktail glass</span>
        <span>Champagne flute</span>

      </div>
    </div>
  );
};

export default Header;
