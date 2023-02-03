import "./style.scss";
import React, { useEffect, useState } from "react";
import Cocktail from "./components/Cocktail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const MainPage = () => {

  const [data, setData] = useState();
  const [menuItem, setMenuItem] = useState({});

  let cocktails;

  function apiAlcoholic(menuItem) {
    let url = '';
    switch (menuItem.filterProperty) {
      case 'a':
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='+menuItem.filterValue;
        break;
      case 'c':
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c='+menuItem.filterValue;
        break;
      case 'g':
        url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g='+menuItem.filterValue;
        break;
      default:
        url="https://www.thecocktaildb.com/api/json/v1/1/random.php"
        break;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          return response.json();
        }

      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => { console.error(error) })
  }

  const mainPageCallbackHeader = (clickedMenuItem) => {
    setMenuItem(clickedMenuItem);

  }
   useEffect(()=>{
    console.log("menuitem",menuItem);
    apiAlcoholic(menuItem);
   },[menuItem]);


  return (
    <div className="mainPage">
      <div>
        <Header mainPageCallbackHeader={mainPageCallbackHeader} />
      </div>
      <div className="main">
        <Cocktail cocktailInformation={data}></Cocktail>
      </div>
      <div className="footer">
        <Footer />
      </div>

    </div>
  );


};

export default MainPage;
