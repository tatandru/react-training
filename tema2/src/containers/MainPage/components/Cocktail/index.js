import "./style.scss"
import React from "react"

const Cocktail = ({cocktailInformation, mainPageCallbackCocktail}) => {

    // const cocktail=props.cocktailInformation.drinks.map((value,index)=>{
    //     return <button>{value}</button>

    // })
    function onCocktailClick(event){
        mainPageCallbackCocktail({ filterProperty: "s", filterValue: cocktailInformation.strDrink });
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