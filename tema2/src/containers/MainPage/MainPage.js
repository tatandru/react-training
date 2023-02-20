import "./style.scss";
import React, { useEffect, useState } from "react";
import Cocktail from "./components/Cocktail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";



const MainPage = () => {

  const [data, setData] = useState();
  const [menuItem, setMenuItem] = useState({});
  const [showBackButton,setShowBackButton]=useState(false);

  function apiAlcoholic(menuItem) {
    let url = '';
    console.log("filter value", menuItem.filterValue);
    console.log("filter property", menuItem.filterProperty);
    if (menuItem.filterValue === "") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    } else {
      switch (menuItem.filterProperty) {
        case 'a':
          url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=' + menuItem.filterValue;
          break;
        case 'c':
          url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + menuItem.filterValue;
          break;
        case 'g':
          url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=' + menuItem.filterValue;
          break;
        case 's':
          url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + menuItem.filterValue;
          break;
        default:
          url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
          break;
      }
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
    apiAlcoholic(menuItem);
    console.log("menuItem", menuItem)
  }, [menuItem]);

  return (
    <div className="mainPage">
      <Header mainPageCallbackHeader={mainPageCallbackHeader} />
      <div className="main">
      
        {!data ? '' : data.drinks.map((value, index) => {
          console.log("value",value)
          return <Cocktail cocktailInformation={value} key={index}
           mainPageCallbackCocktail={mainPageCallbackCocktail} setShowBackButton={setShowBackButton}/>
        }) }

      </div>
      <Footer />

    </div>
  );


};

export default MainPage;
