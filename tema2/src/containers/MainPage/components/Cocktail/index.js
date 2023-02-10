import "./style.scss"
import React from "react"

const Cocktail = ({cocktailInformation}) => {

    // const cocktail=props.cocktailInformation.drinks.map((value,index)=>{
    //     return <button>{value}</button>

    // })

    return (
        <div className="cocktail">
            <img src={cocktailInformation.strDrinkThumb}/>
            <p className="cocktailName">{cocktailInformation.strDrink}</p>
            
        </div>


    )


}

export default Cocktail;