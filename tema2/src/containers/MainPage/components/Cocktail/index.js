import "./style.scss"
import React, { useState } from "react"

const Cocktail = ({cocktailInformation, mainPageCallbackCocktail,setShowBackButton}) => {

    // const cocktail=props.cocktailInformation.drinks.map((value,index)=>{
    //     return <button>{value}</button>

    // })

    function onCocktailClick(event){
        mainPageCallbackCocktail({ filterProperty: "s", filterValue: cocktailInformation.strDrink });
        setShowBackButton(true);
        event.preventDefault();
    }
    return (
        <div className="cocktail" onClick={(event)=>onCocktailClick(event)}>
            <img src={cocktailInformation.strDrinkThumb}/>
            <p className="cocktailName">{cocktailInformation.strDrink}</p>
            
        </div>


    )


}

export default Cocktail;