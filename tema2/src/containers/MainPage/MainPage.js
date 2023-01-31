import "./style.scss";
import React, { useState } from "react";
import Cocktail from "./components/Cocktail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const MainPage = () => {

  const [data, setData] = useState([]);


   function apiAlcoholic(){
     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        } else {
          return response.json();
        }

      })
      .then((data) => { 
        setData(data);
        console.log(data);
      })
      .catch((error) => {console.error(error)})
  }
  
  return (
    <div className="mainPage">
      <div className="header">
        <Header />
      </div>
      <button onClick={apiAlcoholic}></button>
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
