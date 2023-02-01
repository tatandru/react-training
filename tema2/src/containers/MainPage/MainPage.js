import "./style.scss";
import React, { useState } from "react";
import Cocktail from "./components/Cocktail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const MainPage = () => {

  const [data, setData] = useState([]);
  const [menuItem, setMenuItem] = useState({});


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
        url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
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

  return (
    <div className="mainPage">
      <div className="header">
        <Header mainPageCallbackHeader={mainPageCallbackHeader} />
      </div>
      <button onClick={console.log("asd")}></button>
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
