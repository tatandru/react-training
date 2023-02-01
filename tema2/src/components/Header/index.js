import "./style.scss";
import React from "react";

const Header = ({ mainPageCallbackHeader }) => {
  const menu = [{ filterProperty: "a", filterValue: "Alcoholic" },
  { filterProperty: "a", filterValue: "Non Alcoholic" },
  { filterProperty: "c", filterValue: "Ordinary Drink" },
  { filterProperty: "g", filterValue: "Cocktail glass" },
  { filterProperty: "g", filterValue: "Champagne flute" }];

  const menuItem = menu.map((value, index) => {
    return <span value={value.filterValue} property={value.filterProperty} key={index}
      onClick={(event) => { mainPageCallbackHeader(value); event.preventDefault() }}>
      {value.filterValue}
    </span>
  })

  return (
    <div className='header'>

      <div className="headerBanner">
        <h1 className="title">Cocktails</h1>
      </div>

      <div className="cocktailMenu">
        {menuItem}
      </div>
    </div>
  );
};

export default Header;
