import "./style.scss"
import React, { useState } from "react"
import { useLocation, useParams } from "react-router-dom";

const CreateCocktail = () => {

    const params = useParams();
    const infoFromLink = useLocation();
    console.log("infoFromLink",infoFromLink)
    console.log("param",params);
    return (
        <div className="createCocktail">
            <div className="uploadArea">
                adsfsadf
            </div>
            
                <form className="cocktailInput">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Submit</button>
                </form>
            
        </div>

    );
}

export default CreateCocktail;