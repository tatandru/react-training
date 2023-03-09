import "./style.scss";
import React, { useEffect, useState } from "react";
import Cocktail from "./components/Cocktail/Cocktail";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CreateCocktail from "./components/CreateCocktail/CreateCocktail";
import { Outlet, useLocation, useMatch } from "react-router-dom";



const MainPage = () => {


  // const mainPageCallbackHeader = (clickedMenuItem) => {
  //   setMenuItem(clickedMenuItem);
  // }

  // const mainPageCallbackCocktail = (clickedCocktail)=>{
  //   setMenuItem(clickedCocktail);
  // }

  

  return (
    <div className="mainPage">
      <Header/>
      <div className="main">
        <Outlet/>
        {/* {!data ? '' : data.drinks.map((value, index) => {
          console.log("value",value)
          return <Cocktail cocktailInformation={value} key={index}
           mainPageCallbackCocktail={mainPageCallbackCocktail} setShowBackButton={setShowBackButton}/>
        }) } */}
        {/* <CreateCocktail/> */}
      </div>
      <Footer />

    </div>
  );


};

export default MainPage;
