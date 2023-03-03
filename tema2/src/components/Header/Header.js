import "./style.scss";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ mainPageCallbackHeader }) => {
  const menu = [{ filterProperty: "a", filterValue: "Alcoholic" },
  { filterProperty: "a", filterValue: "Non Alcoholic" },
  { filterProperty: "c", filterValue: "Ordinary Drink" },
  { filterProperty: "g", filterValue: "Cocktail glass" },
  { filterProperty: "g", filterValue: "Champagne flute" }];

  const [keyOfDisabledButton, setKeyOfDisabledButton] = useState();
  const [searchQuery, setSearchQuery] = useState();

  // const selectMenuItem = () => {
  //   let buttons = [];
  //   menu.map((value, index) => {
  //     let disabledButton = <button disabled={true} value={value.filterValue} property={value.filterProperty} key={index}
  //       onClick={(event) => { mainPageCallbackHeader(value);
  //       event.preventDefault();  }}
  //       className={'menuItem'}>
  //       {value.filterValue}
  //     </button>
  //     let activeButton = <button disabled={false} value={value.filterValue} property={value.filterProperty} key={index}
  //       onClick={(event) => { resetButtonState(event,value,index) }}
  //       className={'menuItem'}>
  //       {value.filterValue}
  //     </button>
  //     if (index === keyOfDisabledButton) {
  //       buttons.push(disabledButton);
  //     } else {
  //       buttons.push(activeButton);
  //     }
  //   })
  //   return buttons;
  // }

  const selectMenuItem = () => {
    let listOfLinks=[];
    menu.forEach((menuItem)=>{
      console.log(menu);
      console.log(menuItem)
      listOfLinks.push(<Link to={`/${menuItem.filterValue}`} className={'menuItem'} >{menuItem.filterValue}</Link>)
    
    }) 
    TODO  : //daca menu.filtervalue e in path sa faca highligth la link
    return listOfLinks;
    
  }

  function resetButtonState(event,value,index){
    mainPageCallbackHeader(value);
    setKeyOfDisabledButton(index);
    setSearchQuery("");
    event.preventDefault();
  }

  function backToHome(event) {
    mainPageCallbackHeader({});
    setKeyOfDisabledButton(undefined);
    setSearchQuery("");
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
           onChange={(event) => { setSearchQuery(event.target.value); event.preventDefault(); }} value={searchQuery}/>
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
