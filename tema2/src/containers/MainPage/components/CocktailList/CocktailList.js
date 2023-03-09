import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Cocktail from "../Cocktail/Cocktail";

const CocktailList = () => {
  const { pathname, state } = useLocation();
  console.log("state", state);
  console.log("pathnamne", pathname);
  const [data, setData] = useState();
  const [menuItem, setMenuItem] = useState({});

  function getUrl(menuItem) {
    let url = "";
    if (menuItem.filterValue === "") {
      url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    } else {
      switch (menuItem.filterProperty) {
        case "a":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=" +
            menuItem.filterValue);
        case "c":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" +
            menuItem.filterValue);
        case "g":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=" +
            menuItem.filterValue);
        case "s":
          return (url =
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            menuItem.filterValue);
      }
    }
  }

  function getCocktails(menuItem) {
    let url = getUrl(menuItem);

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
    setMenuItem(state);
    console.log("asdasd", menuItem);
    getCocktails(menuItem);
    console.log("data", data);
  }, [menuItem, state, pathname]);

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
