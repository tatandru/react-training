import "./style.scss";
import React, { useEffect, useState } from "react";
import Cocktail from "./components/Cocktail/Cocktail";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CreateCocktail from "./components/CreateCocktail/CreateCocktail";
import { Outlet } from "react-router-dom";



const MainPage = () => {

  const [data, setData] = useState();
  const [menuItem, setMenuItem] = useState({});
  const [showBackButton,setShowBackButton]=useState(false);
  const [isCreateCocktail,setIsCreateCocktail]=useState(false);


  function getUrl(menuItem){
    let url = '';
    if (menuItem.filterValue === "") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    } else {
      switch (menuItem.filterProperty) {
        case 'a':
         return  url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + menuItem.filterValue;
        case 'c':
          return url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + menuItem.filterValue;
        case 'g':
          return url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=' + menuItem.filterValue;
        case 's':
          return url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + menuItem.filterValue;
        default:
          return url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      }
    }

  }

  function getCocktails(menuItem) {
    let url = getUrl(menuItem)

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          return response.json();
        }

      })
      .then((data) => {
        if(data.drinks===null){
          setData(undefined)
        }else{
          setData(data);
        }
        
      })
      .catch((error) => { console.error(error);})
  }

  const mainPageCallbackHeader = (clickedMenuItem) => {
    setMenuItem(clickedMenuItem);
  }

  const mainPageCallbackCocktail = (clickedCocktail)=>{
    setMenuItem(clickedCocktail);
  }

  useEffect(() => {
    getCocktails(menuItem);
    console.log("menuItem", menuItem)
  }, [menuItem]);

  return (
    <div className="mainPage">
      <Header mainPageCallbackHeader={mainPageCallbackHeader} />
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
