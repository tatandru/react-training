import "./style.scss";
import React, { useState } from "react";

const Header = ({ mainPageCallbackHeader }) => {
  const menu = [{ filterProperty: "a", filterValue: "Alcoholic" },
  { filterProperty: "a", filterValue: "Non Alcoholic" },
  { filterProperty: "c", filterValue: "Ordinary Drink" },
  { filterProperty: "g", filterValue: "Cocktail glass" },
  { filterProperty: "g", filterValue: "Champagne flute" }];

  const [keyOfDisabledButton, setKeyOfDisabledButton] = useState();
  const [searchQuery, setSearchQuery] = useState();

  const selectMenuItem = () => {
    let buttons = [];
    menu.map((value, index) => {
      let disabledButton = <button disabled={true} value={value.filterValue} property={value.filterProperty} key={index}
        onClick={(event) => { mainPageCallbackHeader(value); event.preventDefault(); }}
        className={'menuItem'}>
        {value.filterValue}
      </button>
      let activeButton = <button disabled={false} value={value.filterValue} property={value.filterProperty} key={index}
        onClick={(event) => { mainPageCallbackHeader(value); setKeyOfDisabledButton(index); event.preventDefault(); }}
        className={'menuItem'}>
        {value.filterValue}
      </button>
      if (index === keyOfDisabledButton) {
        buttons.push(disabledButton);
      } else {
        buttons.push(activeButton);
      }
    })
    return buttons;
  }

  console.log("searchquery", searchQuery)

  function backToHome(event) {
    mainPageCallbackHeader({});
    setKeyOfDisabledButton(undefined);
    event.preventDefault();
  }

  function searchSubmitQuery(event) {
    mainPageCallbackHeader({ filterProperty: "s", filterValue: searchQuery });
    setKeyOfDisabledButton(undefined);
    setSearchQuery("");
    event.preventDefault();
  }


  return (
    <div className='header'>

      <div className="headerBanner">
        <div className="emptySpace"></div>
        <h1 className="title" onClick={(event) => { backToHome(event) }}>Cocktails</h1>
        <form className="searchBar">
          <input type="text" placeholder="Search Cocktail by Name ..." className="searchBarInput"
           onChange={(event) => { setSearchQuery(event.target.value); event.preventDefault(); }}></input>
          <button className="searchBarSubmit" onClick={(event) => { searchSubmitQuery(event) }}>Submit</button>
        </form>
      </div>

      <div className="cocktailMenu">
        {selectMenuItem()}
      </div>

    </div>
  );
};

export default Header;
