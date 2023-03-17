import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Cocktail from "../Cocktail/Cocktail";

const CocktailList = () => {
  const { pathname, state } = useLocation();
  console.log("state", state);
  console.log("pathnamne", pathname);
  const [data, setData] = useState();
  
//TO DO: cand intru direct pe url nu gaseste filter.property

  function getUrl(state) {
    let url = "";
    if (state.filterValue === "") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    } else {
      switch (state.filterProperty) {
        case "a":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" +
            state.filterValue);
        case "c":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" +
            state.filterValue);
        case "g":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" +
            state.filterValue);
        case "s":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            state.filterValue);
      }
    }
  }

  function getCocktails(state) {
    let url = getUrl(state);
    console.log(url);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data.drinks === null) {
          setData(undefined);
        } else {
          setData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    
    console.log("asdasd", state);
    getCocktails(state);
    console.log("data", data);
  }, [state, pathname]);

  return (
    
    <>
      {!data
        ? ""
        : data.drinks.map((value, index) => {
            return <Cocktail cocktailInformation={value} key={index} />;
          })}
    </>
  );
};

export default CocktailList;
